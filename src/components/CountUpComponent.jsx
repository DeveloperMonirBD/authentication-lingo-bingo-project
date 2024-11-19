import CountUp from 'react-countup';

const CountUpComponent = () => {
    return (
        <div className="bg-gray-100 py-12 mt-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-10 text-brandPrimary">Our Achievements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Users</h3>
                        <p className="text-4xl font-bold text-blue-500">
                            <CountUp end={5000} duration={3} />
                        </p>
                    </div>
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Lessons</h3>
                        <p className="text-4xl font-bold text-green-500">
                            <CountUp end={200} duration={3} />
                        </p>
                    </div>
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Vocabularies</h3>
                        <p className="text-4xl font-bold text-red-500">
                            <CountUp end={200} duration={3} />
                        </p>
                    </div>
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Tutorials</h3>
                        <p className="text-4xl font-bold text-purple-500">
                            <CountUp end={50} duration={3} />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountUpComponent;
