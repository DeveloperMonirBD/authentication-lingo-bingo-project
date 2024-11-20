//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import vocabularies from '../../public/vocabularies.json';

const LessonPage = () => {
    const { lesson_no } = useParams();
    const navigate = useNavigate();
    const [lessonVocabularies, setLessonVocabularies] = useState([]);
    const [modalData, setModalData] = useState(null);

    useEffect(() => {
        const filteredVocabularies = vocabularies.filter(vocab => vocab.lesson_no === parseInt(lesson_no, 10));
        setLessonVocabularies(filteredVocabularies);
    }, [lesson_no]);

    const handleModalOpen = vocab => {
        setModalData(vocab);
        pronounceWord(vocab.word); // Pronounce the word when the modal opens
    };

    const handleModalClose = () => {
        setModalData(null);
    };

    const pronounceWord = word => {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'es-ES'; // Set the language to Spanish
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div className="container mx-auto px-3 py-8">
            <motion.h1
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className="text-6xl font-extrabold text-center text-brandPrimary mb-8">
                Lesson - <span className="text-secondary">{lesson_no}</span>
            </motion.h1>
            <motion.div
                variants={fadeIn('up', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {lessonVocabularies.map(vocab => (
                    <div
                        key={vocab.id}
                        onClick={() => pronounceWord(vocab.word)}
                        className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl duration-300 ${
                            vocab.difficulty === 'difficult' ? 'bg-red-100' : vocab.difficulty === 'medium' ? 'bg-yellow-100' : 'bg-green-100'
                        } transform transition-all hover:scale-105 cursor-pointer`}>
                        <h2 className="text-2xl font-semibold text-gray-800">{vocab.word}</h2>
                        <p className="text-gray-600">Pronunciation: {vocab.pronunciation}</p>
                        <p className="text-gray-600">Meaning: {vocab.meaning}</p>
                        <p className="text-gray-600">Part of Speech: {vocab.part_of_speech}</p>
                        <button
                            onClick={e => {
                                e.stopPropagation();
                                handleModalOpen(vocab);
                            }}
                            className="btn bg-brandPrimary text-white text-base hover:text-gray-900 mt-4">
                            When to say
                        </button>
                    </div>
                ))}
            </motion.div>
            <motion.button
                variants={fadeIn('left', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
                className="btn button-secondary"
                onClick={() => navigate('/startLearning')}>
                Back to Lessons
            </motion.button>

            {modalData && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                        <h2 className="text-2xl font-semibold text-gray-800">{modalData.word}</h2>
                        <p className="text-gray-600">Pronunciation: {modalData.pronunciation}</p>
                        <p className="text-gray-600">Meaning: {modalData.meaning}</p>
                        <p className="text-gray-600">Part of Speech: {modalData.part_of_speech}</p>
                        <p className="text-gray-600">When to say: {modalData.when_to_say}</p>
                        <p className="text-gray-600">Example: {modalData.example}</p>
                        <button onClick={handleModalClose} className="btn bg-brandPrimary text-white text-base hover:text-gray-900 mt-4">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LessonPage;
