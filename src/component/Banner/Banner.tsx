"use client"
import { motion } from "framer-motion"
import Image from "next/image";
import hero from '../../asserts/hero1.gif'
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
    return ( 
        <div id="home" className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'>
            <div className=" flex flex-col items-center justify-between lgl:flex-row gap-6">
                <div className=' w-full lgl:w-2/3 text-base flex flex-col gap-6'>
                <motion.h3 
                    initial={{y:10, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{ duration:0.5, delay:0.5}} 
                    className=' text-lg font-semibold tracking-wide text-textDarkDeep'
                    >
                    Hi, my name is
                    </motion.h3>
                    <motion.h1
                    initial={{y:10, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{ duration:0.5, delay:0.7}} 
                    className=' text-3xl lgl:text-5xl font-bold tracking-wide text-textDarkDeep flex flex-col'
                    >
                        Jakaria Hossain Sani.
                    </motion.h1>

                    <motion.p 
                    className=''
                    initial={{y:10, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{ duration:0.5, delay:0.7}} 
                    >I am a <span className="secendare-text-color text-sm">
                        <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Web Developer.',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Javascript Developer.',
                        1000,
                        'React Web Developer.',
                        1000,
                        'Front End Developer.',
                        1000
                    ]}
                    wrapper="span"
                    speed={60}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                    /></span></motion.p>
                </div>

                <motion.div 
                initial={{y:10, opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{ duration:0.5, delay:0.7}}
                className=" flex flex-col"
                >
                    <Image className="" src={hero} alt=""/>
                </motion.div>

                

            </div>
            <a href="#about">
                <motion.div
                className="scrollDown w-[30px] h-[60px] border border-textDarkDeep rounded-full cursor-pointer relative md:mx-0 mx-auto transform ease-in-out duration-300"
                initial={{y:10, opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{ duration:0.5, delay:0.7}}
                > 
                </motion.div>
            </a>
           

        </div>
    );
};

export default Banner;