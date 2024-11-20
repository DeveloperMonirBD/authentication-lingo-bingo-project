import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const Tutorials = () => {
    return (
        <div className="mb-20">
            <div className="flex flex-col justify-center items-center text-center mt-8">
                <h1 className="text-5xl font-bold text-center text-brandPrimary">Videos to learn Spanish</h1>
                <p className="md:w-[700px] mt-4 mb-6">
                    Are you ready to increase your vocabulary quickly? You just need to watch the video, paying attention to the pronunciation of words in Spanish. Then, read the list of vocabulary..
                    Finally, take the test and check your knowledge.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
                <div className="player">
                    <ReactPlayer width="100%" height="100%" controls url="https://youtu.be/lZMMqMvY1d0?si=QgIlckQ9T1eYhQOy" />
                </div>
                <div className="player">
                    <ReactPlayer width="100%" height="100%" controls url="https://youtu.be/EgJDqM3sDL8?si=zFv3wIFrgO7RSSzr" />
                </div>
                <div className="player">
                    <ReactPlayer width="100%" height="100%" controls url="https://youtu.be/F_cKEcoIHAU?si=o-5THM7F7iUo6XN4" />
                </div>
                <div className="player">
                    <ReactPlayer width="100%" height="100%" controls url="https://youtu.be/xPsn35IudKc?si=FoPu4oVZ_liIj2tz" />
                </div>

                <div className="player">
                    <ReactPlayer width="100%" height="100%" controls url="https://youtu.be/jHqxgPXGr-M?si=2sl6Nll0IPYq8Hyr" />
                </div>

                <div className="player">
                    <ReactPlayer width="100%" height="100%" controls url="https://youtu.be/aVNf1B0nNf4?si=uU2fYd_Ir18MxiDa" />
                </div>

                <div className="player">
                    <ReactPlayer width="100%" height="100%" controls url="https://youtu.be/gMHIX9-N0kU?si=lWOjo6hQwjVs8Zxb" />
                </div>

                <div className="player">
                    <ReactPlayer width="100%" height="100%" controls url="https://youtu.be/OOudFD8UNA8?si=Vi-T0RJQrw6yZ8Bh" />
                </div>

                <div className="player">
                    <ReactPlayer width="100%" height="100%" controls url="https://youtu.be/L-4D9-s3cl0?si=Rm-VnDFF4v2JWiWp" />
                </div>
                <div className="player">
                    <ReactPlayer width="100%" height="100%" controls url="https://youtu.be/CsfCWudlufY?si=I67fGBXHxqsXwzbI" />
                </div>
            </div>
            <div className="mt-16">
                <Link to="/startLearning" className="button-primary mt-10">
                    Learn Vocabularies
                </Link>
            </div>
        </div>
    );
};

export default Tutorials;
