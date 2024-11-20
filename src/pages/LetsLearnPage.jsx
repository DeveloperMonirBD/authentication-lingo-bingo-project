import ReactPlayer from 'react-player/youtube';
import { Link } from 'react-router-dom';
const lessons = Array.from({ length: 10 }, (_, i) => `Lesson-${i + 1}`);
const LetsLearnPage = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-5xl font-extrabold text-center text-brandPrimary mb-12">Let’s Learn</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
                {lessons.map((lesson, index) => (
                    <Link
                        to={`/lesson/${index + 1}`}
                        key={lesson}
                        className="bg-brandPrimary transform transition-all hover:scale-105 duration-300 rounded-lg shadow-xl p-6 text-center ">
                        <h2 className="text-2xl font-semibold text-neutralSilver">{lesson}</h2>
                    </Link>
                ))}
            </div>

            <div className="bg-white rounded-lg shadow-lg p-12 text-center flex flex-col justify-center items-center">
                <h2 className="text-4xl font-semibold text-brandPrimary mb-8">Learn the Alphabet</h2>
                <ReactPlayer url="https://youtu.be/lZMMqMvY1d0?si=QgIlckQ9T1eYhQOy" controls={true} className="rounded-lg overflow-hidden" />
                <Link to="/tutorial" className="btn bg-brandPrimary mt-6 text-white hover:text-black">
                    View more
                </Link>
            </div>
        </div>
    );
};
export default LetsLearnPage;
