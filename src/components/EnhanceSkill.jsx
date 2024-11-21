//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
import { Link } from 'react-router-dom';

const EnhanceSkill = () => {
    return (
        <motion.div
            variants={fadeIn('left', 0.6)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }}
            className="container mx-auto py-10 my-10 md:py-16 px-10 lg:px-20 bg-green-100 rounded-tl-none rounded-tr-[100px] rounded-bl-[100px] rounded-br-none shadow-md">
            <h2 className="text-2xl text-gray-600 font-bold mb-4">Enhance your skills and advance your career with our comprehensive programs.</h2>
            <p className="mb-8 text-gray-600">
                Enhance your French language skills and expand your vocabulary with our innovative platform. Whether you're a beginner or advanced learner, our programs offer interactive lessons,
                practical exercises, and engaging activities.
            </p>
            <Link to="/startLearning" className="btn button-secondary text-white py-2 px-4 rounded hover:bg-green-700 transition">
                Your Details
            </Link>
        </motion.div>
    );
};

export default EnhanceSkill;
