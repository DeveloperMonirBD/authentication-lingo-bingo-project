import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import vocabularies from '../../public/vocabularies.json'

const LessonPage = () => {
    const { lesson_no } = useParams();
    const navigate = useNavigate();
    const [lessonVocabularies, setLessonVocabularies] = useState([]);

    useEffect(() => {
        const filteredVocabularies = vocabularies.filter(vocab => vocab.lesson_no === parseInt(lesson_no, 10));
        setLessonVocabularies(filteredVocabularies);
    }, [lesson_no]);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-6xl font-extrabold text-center text-brandPrimary mb-8">
                Lesson - <span className="text-secondary">{lesson_no}</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {lessonVocabularies.map(vocab => (
                    <div
                        key={vocab.id}
                        className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl duration-300 ${
                            vocab.difficulty === 'difficult' ? 'bg-red-100' : vocab.difficulty === 'medium' ? 'bg-yellow-100' : 'bg-green-100'
                        } transform transition-all hover:scale-105`}>
                        <h2 className="text-2xl font-semibold text-gray-800">{vocab.word}</h2>
                        <p className="text-gray-600">Pronunciation: {vocab.pronunciation}</p>
                        <p className="text-gray-600">Meaning: {vocab.meaning}</p>
                        <p className="text-gray-600">Part of Speech: {vocab.part_of_speech}</p>
                        <label htmlFor="my_modal_7" className="btn bg-brandPrimary text-white text-base hover:text-gray-900 mt-4">
                            When to say
                        </label>

                        {/* Modal */}
                        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                        <div className="modal" role="dialog">
                            <div className="modal-box">
                                <h3 className="text-lg font-bold text-brandPrimary">
                                    {vocab.word} <span className="text-secondary">: </span>
                                    {vocab.meaning}
                                </h3>
                                <p className="mt-2">
                                    When to say <span className="text-secondary font-bold">: </span> <span className="text-brandPrimary">{vocab.when_to_say}</span>
                                </p>
                                <p className="py-2">
                                    Example <span className="text-secondary font-bold">: </span> <span className="text-brandPrimary">{vocab.example}</span>
                                </p>
                            </div>
                            <label className="modal-backdrop" htmlFor="my_modal_7">
                                Close
                            </label>
                        </div>
                    </div>
                ))}
            </div>
            <button className="btn button-secondary" onClick={() => navigate('/startLearning')}>
                Back to Lessons
            </button>
        </div>
    );
};

export default LessonPage;
