
import { FaLanguage, FaLightbulb, FaRocket } from 'react-icons/fa';

const About = () => {
    return (
        <section className=" mt-20">
            <div className="container mx-auto text-center ">
                <h2 className="text-4xl font-extrabold text-brandPrimary mb-8 ">About Lingo Bingo</h2>
                <p className="mb-8 max-w-3xl mx-auto leading-relaxed">
                    Welcome to <strong>Lingo Bingo</strong>! Our mission is to make language learning fun, interactive, and accessible for everyone. We believe that expanding your vocabulary is key to
                    mastering any language, and We are here to help you achieve that with ease and enjoyment.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3  gap-8 ">
                    <div className="bg-white rounded-lg shadow-lg px-4 py-6 transform transition-all duration-300 hover:scale-105 hover:bg-green-100">
                        <div className="flex justify-center mb-4">
                            <FaLanguage className="text-4xl text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Our Mission</h3>
                        <p className="text-base text-neutralGrey">To make language learning fun, interactive, and accessible for everyone.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg px-4 py-6 transform transition-all duration-300 hover:scale-105 hover:bg-blue-100">
                        <div className="flex justify-center mb-4">
                            <FaRocket className="text-4xl text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">How It Works</h3>
                        <p className="text-base text-neutralGrey">Users can dive into interactive lessons, track their progress, and enjoy engaging content.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg px-4 py-6 transform transition-all duration-300 hover:scale-105 hover:bg-purple-100">
                        <div className="flex justify-center mb-4">
                            <FaLightbulb className="text-4xl text-purple-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Engaging Content</h3>
                        <p className="text-base text-neutralGrey">Lessons are packed with examples, pronunciations, and tips to enhance your skills.</p>
                    </div>
                </div>
                <p className="mt-10 text-base font-semiboldmax-w-2xl mx-auto leading-relaxed">
                    Start your language learning journey with Lingo Bingo today and watch your vocabulary grow in no time! 🚀🌟
                </p>
            </div>
        </section>
    );
};

export default About;
