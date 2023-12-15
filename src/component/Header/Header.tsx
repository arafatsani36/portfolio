"use client"
import React from 'react';
import logo from '../../asserts/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion"

const Header = () => {
    return (
        <div className='w-full h-20 lg:h-[12vh] sticky top-0 z-50 bg-slate-300 px-4 bg-bodyColor'>
          <div className='max-w-container h-full mx-auto py-1 flex justify-between items-center'>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{ duration:0.05}}>
                <Image src={logo} alt='' width={50} height={50}/>
            </motion.div>
            <div className='hidden mdl:inline-flex items-center gap-4'>
                <ul className='flex items-center justify-center gap-5'>
                   <Link className=' text-textDark hover:text-textGreen cursor-pointer duration-200 transition text-base font-semibold' href=''>
                    <motion.li
                     initial={{y: -10, opacity:0}}
                     animate={{y: -0,opacity:1}}
                     transition={{ duration:0.1}}>
                     Home
                    </motion.li>
                    </Link>

                   <Link className=' text-textDark hover:text-textGreen cursor-pointer duration-200 transition text-base font-semibold' href=''>
                    <motion.li
                    initial={{y: -10, opacity:0}}
                    animate={{y: -0,opacity:1}}
                    transition={{ duration:0.1}}
                    >
                    About
                    </motion.li>
                   </Link>

                   <Link className=' text-textDark hover:text-textGreen cursor-pointer duration-200 transition text-base font-semibold' href=''>
                    <motion.li
                    initial={{y: -10, opacity:0}}
                    animate={{y: -0,opacity:1}}
                    transition={{ duration:0.1}}
                    >
                    Skill
                    </motion.li>
                   </Link>

                   <Link className=' text-textDark hover:text-textGreen cursor-pointer duration-200 transition text-base font-semibold' href=''>
                   <motion.li
                   initial={{y: -10, opacity:0}}
                   animate={{y: -0,opacity:1}}
                   transition={{ duration:0.1}}
                   >
                    Portfolio
                   </motion.li>
                   </Link>

                   <Link className=' text-textDark hover:text-textGreen cursor-pointer duration-200 transition text-base font-semibold' href=''>
                   <motion.li
                    initial={{y: -10, opacity:0}}
                    animate={{y: -0,opacity:1}}
                    transition={{ duration:0.1}}
                   
                    >
                    Contact
                   </motion.li>
                   </Link>
                </ul>

               <a href="/public/Jakariah Hossain Sani-Web Developer Resume.pdf" target='_blank'>
               <motion.button
                initial={{y: -10, opacity:0}}
                animate={{y: -0,opacity:1}}
                transition={{ duration:0.1}}
                className=' px-4 py-2 text-textGreen border border-textGreen rounded-lg text-base font-semibold transition duration-300 hover:bg-hoverColor'
                >
                Resume
               </motion.button>
               </a>
            </div>


            {/* small device */}
            <div className='w-6 h-5 flex flex-col items-center justify-between mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden gr group'>
                <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-out duration-300'></span>
                <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-out duration-300'></span>
                <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-out duration-300'></span>
            </div>


          </div>
        </div>
    );
};

export default Header;