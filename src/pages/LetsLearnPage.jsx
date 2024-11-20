//motion
import { motion } from 'framer-motion';

//variants
import { fadeIn } from '../variants';

import ReactPlayer from 'react-player/youtube';
import { Link } from 'react-router-dom';
const lessons = Array.from({ length: 10 }, (_, i) => `Lesson-${i + 1}`);
const LetsLearnPage = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <motion.h1
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className="text-5xl font-extrabold text-center text-brandPrimary mb-12">
                Let’s Learn
            </motion.h1>

            <motion.div
                variants={fadeIn('left', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
                {lessons.map((lesson, index) => (
                    <Link to={`/lesson/${index + 1}`} key={lesson} className="bg-brandPrimary transform transition-all hover:scale-105 duration-300 rounded-lg shadow-xl p-6 text-center ">
                        <h2 className="text-2xl font-semibold text-neutralSilver">{lesson}</h2>
                    </Link>
                ))}
            </motion.div>

            <div className="bg-white rounded-lg shadow-lg p-12 text-center flex flex-col justify-center items-center">
                <motion.h2 variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.5 }} className="text-4xl font-semibold text-brandPrimary mb-8">
                    Learn the Alphabet
                </motion.h2>

                <motion.div variants={fadeIn('right', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.4 }}>
                    <ReactPlayer url="https://youtu.be/lZMMqMvY1d0?si=QgIlckQ9T1eYhQOy" controls={true} className="rounded-lg overflow-hidden" />
                </motion.div>
                <Link to="/tutorial" className="btn bg-brandPrimary mt-6 text-white hover:text-black">
                    View more
                </Link>
            </div>
        </div>
    );
};
export default LetsLearnPage;
