//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

import { Carousel } from 'flowbite-react';
import banner1 from '../assets/hero-graphics.svg';
import banner2 from '../assets/hero1.png';
import banner3 from '../assets/frame.png';

const Banner = () => {
    return (
        <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="min-h-[650px] sm:h-64 xl:h-80 2xl:h-96 px-4 lg:px-14 max-w-screen-2xl mx-auto h-screen bg-[radial-gradient(50%_50%_at_50%_50%,#17956D_0%,#0F684C_100%)] pt-20 pb-24 -mt-[52px] md:-mt-[40px] py-16 rounded-md ">
            <Carousel className="w-full mx-auto">
                {/* banner1  */}
                <div className="md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:px-12">
                    <div>
                        <img src={banner1} alt="" />
                    </div>
                    {/* hero text  */}
                    <div className="md:w-2/3">
                        <h1 className="text-5xl font-semibold mb-4 text-white md:w-3/4 leading-snug">
                            Lessons and insights <span className="text-gray-900">from 8 years</span>
                        </h1>
                        <p className="text-neutralSilver text-base mb-8 ">Where to grow your business as a photographer: site or social media</p>
                        <button className="button-secondary">Register</button>
                    </div>
                </div>
                {/* banner2  */}
                <div className="md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:px-12">
                    <div>
                        <img src={banner2} alt="" />
                    </div>
                    {/* hero text  */}
                    <div className="md:w-2/3">
                        <h1 className="text-5xl font-semibold mb-4 text-white md:w-3/4 leading-snug">
                            Lessons and insights <span className="text-gray-900">from 8 years</span>
                        </h1>
                        <p className="text-neutralSilver text-base mb-8 ">Where to grow your business as a photographer: site or social media</p>
                        <button className="button-secondary">Register</button>
                    </div>
                </div>
                {/* banner3  */}
                <div className="md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:px-12">
                    <div>
                        <img src={banner3} alt="" />
                    </div>
                    {/* hero text  */}
                    <div className="md:w-2/3">
                        <h1 className="text-5xl font-semibold mb-4 text-white md:w-3/4 leading-snug">
                            Lessons and insights <span className="text-gray-900">from 8 years</span>
                        </h1>
                        <p className="text-neutralSilver text-base mb-8 ">Where to grow your business as a photographer: site or social media</p>
                        <button className="button-secondary">Register</button>
                    </div>
                </div>
            </Carousel>
        </motion.div>
    );
};

export default Banner;
