/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { motion } from "framer-motion";
import PackageOption from "../components/Packages/Packages";
import { Link } from "react-router-dom";
import Background from '../assets/airplane1.jpg'
import { twMerge } from "tailwind-merge";
import Container from "../components/Container/Container";



const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
};

const slideIn = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};


const stagger = {
    visible: { transition: { staggerChildren: 0.2 } },
};

const parallax = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

const Home = ({ className }) => {
    return (
        <Container className={twMerge(
            'xl:px-0 px-0 h-[80vh] max-w-full lg:mb-24 mb:96',
            className
        )}>
            <div style={{ background: `url(${Background})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover' }} className="w-full h-full">
                <div>
                    <motion.div className="px-8 lg:px-24"

                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                    >
                        <motion.div variants={stagger} className='flex flex-col justify-center items-center mx-auto col-span-3'>
                            <motion.h1 className="text-white text-xl  font-roboto  text-center lg:text-6xl font-bold  mt-16"
                                variants={slideIn}>
                                Travel, Fun, Enjoy
                            </motion.h1>
                            <motion.p className="text-[16px] lg:text-xl font-normal font-roboto my-2 text-white mb-[18px] lg:my-6 text-center"
                                variants={slideIn}>
                                We make it easy to plane your travel, automate your <br /> expenses and provide valuable insight.

                            </motion.p>
                            <motion.div className='flex justify-start items-start'
                                initial="hidden"
                                animate="visible"
                                variants={parallax}
                                whileHover={{ scale: 1.05, backgroundPosition: "200% 0%" }}
                                whileTap={{ scale: 0.95 }}>
                                <Link to="/master-price" className="px-2 lg:px-4  lg:py-1 text-[16px] lg:text-[20px] font-inter  shadow-sm font-semibold rounded-md hover:bg-primary hover:text-white bg-white text-primary/90 transition-all duration-300 ease-in-out"
                                >BOOK YOUR TICKET
                                </Link>
                            </motion.div>
                        </motion.div>

                    </motion.div>
                </div>

            </div>

            <div className="lg:z-10  w-full my-8 lg:my-0 rounded-[20px] lg:transform lg:-translate-y-1/2">
                <PackageOption />
            </div>
        </Container>

    );
};

export default Home;

