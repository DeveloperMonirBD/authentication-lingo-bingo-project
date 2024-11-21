//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

import { FaCalendar, FaUsers, FaClock } from 'react-icons/fa';

const Services = () => {
    return (
        <div className="services py-12 container mx-auto px-3">
            <motion.header variants={fadeIn('up', 0.2)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="flex flex-col items-center text-center mb-10">
                <h1 className="text-4xl text-purple-600  font-bold mb-4">Why Choose Us</h1>
                <p className="text-base md:w-[750px]">
                    We are committed to providing exceptional educational services that empower learners to achieve their goals. Our unique blend of expert instruction, flexible scheduling, and
                    dedicated support ensures an unmatched learning experience tailored to your needs.
                </p>
            </motion.header>

            <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="service-box bg-white shadow-lg rounded-lg p-6 m-4 flex flex-col items-center text-center transition-transform transform hover:scale-105">
                    <div className="service-icon mb-4 text-5xl text-blue-500">
                        <FaCalendar />
                    </div>
                    <div className="service-desc">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Flexible Timing</h2>
                        <p className="text-gray-600">Learn at your own pace with our customizable and flexible scheduling options.</p>
                    </div>
                </div>
                <div className="service-box bg-white shadow-lg rounded-lg p-6 m-4 flex flex-col items-center text-center transition-transform transform hover:scale-105">
                    <div className="service-icon mb-4 text-5xl text-green-500">
                        <FaUsers />
                    </div>
                    <div className="service-desc">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Expert Teachers</h2>
                        <p className="text-gray-600">Our experienced and knowledgeable teachers provide top-quality education and guidance.</p>
                    </div>
                </div>
                <div className="service-box bg-white shadow-lg rounded-lg p-6 m-4 flex flex-col items-center text-center transition-transform transform hover:scale-105">
                    <div className="service-icon mb-4 text-5xl text-purple-500">
                        <FaClock />
                    </div>
                    <div className="service-desc">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">24/7 Live Support</h2>
                        <p className="text-gray-600">Get round-the-clock assistance and support from our dedicated team of experts.</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Services;
