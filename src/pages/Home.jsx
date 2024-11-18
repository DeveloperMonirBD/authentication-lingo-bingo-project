import VocabularyCard from "../components/VocabularyCard";

const Home = () => {

    const data = {
        id: 'hindi-word-1-4',
        word: 'प्रेम',
        pronunciation: 'prem',
        meaning: 'Love',
        part_of_speech: 'noun',
        difficulty: 'difficult',
        lesson_no: 1,
        when_to_say: 'When referring to affection or care',
        example: "The word 'प्रेम' means 'Love' in English."
    };

    return (
        <div className="container mx-auto p-4">
            {' '}
            <VocabularyCard data={data} />{' '}
        </div>
    );
};

export default Home;
