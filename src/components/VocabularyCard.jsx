/* eslint-disable react/prop-types */

const VocabularyCard = ({ data }) => {
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{data.word}</h2> <p className="italic">Pronunciation: {data.pronunciation}</p> <p>Meaning: {data.meaning}</p> <p>Part of Speech: {data.part_of_speech}</p>{' '}
                <p>
                    Difficulty: <span className={`badge ${data.difficulty === 'difficult' ? 'badge-error' : 'badge-success'}`}>{data.difficulty}</span>
                </p>
                <p>Lesson No: {data.lesson_no}</p> <p>When to Say: {data.when_to_say}</p> <p>Example: {data.example}</p> <button className="btn btn-primary mt-4"></button>
            </div>
        </div>
    );
};
export default VocabularyCard;
