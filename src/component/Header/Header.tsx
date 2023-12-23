"use client"
import React, { useEffect, useState, useRef } from 'react';
import logo from '../../asserts/logo.png';
import Image from 'next/image';
import { motion } from "framer-motion"
import Link from 'next/link';
import {FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { MdClose } from 'react-icons/md';

const Header = () => {
    const ref = useRef<string | any>("");
    const [showMenu , setShowMenu] = useState(false);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        debugger;
        e.preventDefault();
        console.log("handleScroll is called");

        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId)
        elem?.scrollIntoView({
            behavior: "smooth"
        });


        const link = document.querySelectorAll(".navLink")
        link.forEach((link) => {
            link.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
    }

   
    return (
        <div className='w-full h-20 lg:h-[12vh] sticky top-0 z-50 bg-slate-300 px-4 bg-bodyColor'>
          <div className='max-w-container h-full mx-auto py-1 flex justify-between items-center'>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{ duration:0.05}}>
                <Image src={logo} alt='' width={50} height={50}/>
            </motion.div>
             <div className='hidden mdl:inline-flex items-center gap-4'>
                <ul className='flex items-center justify-center gap-5 z-auto'>
                  <Link
                   className='text-textDeep hover:text-textGreen cursor-pointer duration-200 transition text-base font-semibold navLink'
                   href='#home' onClick={handleScroll}
                   >
                    <motion.li
                     initial={{y: -10, opacity:0}}
                     animate={{y: -0,opacity:1}}
                     transition={{ duration:0.1}}>
                     Home
                    </motion.li>
                    </Link>

                   <Link className='text-textDeep hover:text-textGreen cursor-pointer duration-200 transition text-base font-semibold navLink' href='#about' onClick={handleScroll}
                   >
                    <motion.li
                    initial={{y: -10, opacity:0}}
                    animate={{y: -0,opacity:1}}
                    transition={{ duration:0.1}}
                    >
                    About
                    </motion.li>
                   </Link>

                   <Link className='text-textDeep hover:text-textGreen cursor-pointer duration-200 transition text-base font-semibold navLink' href='#skill' onClick={handleScroll}>
                    <motion.li
                    initial={{y: -10, opacity:0}}
                    animate={{y: -0,opacity:1}}
                    transition={{ duration:0.1}}
                    >
                    Skill
                    </motion.li>
                   </Link>

                   <Link className='text-textDeep hover:text-textGreen cursor-pointer duration-200 transition text-base font-semibold navLink' href='#awards' onClick={handleScroll}>
                    <motion.li
                    initial={{y: -10, opacity:0}}
                    animate={{y: -0,opacity:1}}
                    transition={{ duration:0.1}}
                    >
                    Awards
                    </motion.li>
                   </Link>

                   <Link className='text-textDeep hover:text-textGreen cursor-pointer duration-200 transition text-base font-semibold navLink' href='#works'  onClick={handleScroll}>
                   <motion.li
                   initial={{y: -10, opacity:0}}
                   animate={{y: -0,opacity:1}}
                   transition={{ duration:0.1}}
                   >
                    Works
                   </motion.li>
                   </Link>

                   <Link className=' text-textDeep hover:text-textGreen cursor-pointer duration-200 transition text-base font-semibold navLink' href='#contact' onClick={handleScroll}>
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
                <div className='w-6 h-5 flex flex-col items-center justify-between text-4xl text-textGreen cursor-pointer overflow-hidden gr group mdl:hidden' onClick={() => setShowMenu(true)}>
                <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-out duration-300'></span>
                <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-out duration-300'></span>
                <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-out duration-300'></span>
                </div>

                {showMenu && (
                    <div ref={(node) => (ref.current = node)} className=' absolute mdl:hidden top-0 right-0 w-full h-screen bg-bodyColor/40  flex flex-col items-end'>
                    
                    <motion.div 
                    initial={{x: 20, opacity:0}}
                    animate={{x: 0,opacity:1}}
                    transition={{ duration:0.1}}
                    className=' w-80 h-full bg-bodyColor relative px-4 py-10 flex flex-col items-center'
                    >
                        <MdClose onClick={() => setShowMenu(false)} className=" text-3xl text-textGreen absolute top-4 right-3 cursor-pointer hover:text-textWhite"/>

                        <div className='flex flex-col items-center gap-5'>
                          <ul className='flex flex-col items-center  gap-5'>
                            <Link
                            className='text-textDeep hover:text-textGreen cursor-pointer duration-200 transition text-base font-semibold navLink'  href='#home' id='home'
                            >
                                <motion.li
                                initial={{x: 20, opacity:0}}
                                animate={{x: 0,opacity:1}}
                                transition={{
                                     duration:0.2,
                                     delay:0.1,
                                     ease:"easeIn"
                                    }}
                                >
                                Home
                                </motion.li>
                                </Link>

                            <Link className='text-textDeep hover:text-textGreen cursor-pointer duration-200 transition text-base font-semibold' href='#about' id='about'
                            >
                                <motion.li
                                  initial={{x: 20, opacity:0}}
                                  animate={{x: 0,opacity:1}}
                                  transition={{
                                     duration:0.2,
                                     delay:0.2,
                                     ease:"easeIn"
                                  }}
                                >
                                About
                                </motion.li>
                            </Link>

                            <Link className='text-textDeep hover:text-textGreen cursor-pointer duration-200 transition text-base font-semibold' href=''>
                                <motion.li
                                  initial={{x: 20, opacity:0}}
                                  animate={{x: 0,opacity:1}}
                                  transition={{
                                    duration:0.2,
                                    delay:0.3,
                                    ease:"easeIn"
                                   }}
                                >
                                Skill
                                </motion.li>
                            </Link>

                            <Link className='text-textDeep hover:text-textGreen cursor-pointer duration-200 transition text-base font-semibold' href=''>
                            <motion.li
                             initial={{x: 20, opacity:0}}
                             animate={{x: 0,opacity:1}}
                             transition={{
                               duration:0.2,
                               delay:0.4,
                               ease:"easeIn"
                              }}
                            >
                                Works
                            </motion.li>
                            </Link>

                            <Link className=' text-textDeep hover:text-textGreen cursor-pointer duration-200 transition text-base font-semibold' href=''>
                            <motion.li
                                 initial={{x: 20, opacity:0}}
                                 animate={{x: 0,opacity:1}}
                                 transition={{
                                   duration:0.2,
                                   delay:0.5,
                                   ease:"easeIn"
                                  }}
                            
                                >
                                Contact
                            </motion.li>
                            </Link>
                    
                          </ul>

                          <a href="/public/Jakariah Hossain Sani-Web Developer Resume.pdf" target='_blank'>
                            <motion.button
                                initial={{ opacity:0}}
                                animate={{opacity:1}}
                                transition={{ 
                                    duration:0.6,
                                    ease:"easeIn"
                                }}
                                className=' px-12 py-4 text-textGreen border border-textGreen rounded-lg text-base font-semibold transition duration-300 hover:bg-hoverColor'
                                >
                                Resume
                            </motion.button>
                          </a> 

                          
                          <div className='flex gap-4 mt-4'>
                             <motion.a 
                             initial={{y:20, opacity:0}}
                             animate={{y:0 ,opacity:1}}
                             transition={{ 
                               delay:0.75,
                               ease:"easeIn"
                             }}
                             href="https://github.com/arafatsani36" target='_blank'>
                                <span className='w-10 h-10 bg-textBlack text-textWhite border border-textWhite rounded-full inline-flex items-center justify-center cursor-pointer hover:text-textBlack hover:bg-textWhite hover:border hover:border-textGreen hover:-translate-y-2 transition-all ease-in-out duration-300'><LuGithub /></span>

                             </motion.a>   
                             <motion.a
                              initial={{y:20, opacity:0}}
                              animate={{y:0 ,opacity:1}}
                              transition={{ 
                                delay:1,
                                ease:"easeIn"
                              }}
                             href="https://www.linkedin.com/in/jakaria-hossain-sani-bb5466280/" target='_blank'>
                                <span className='w-10 h-10 bg-textBlack text-textWhite border border-textWhite rounded-full inline-flex items-center justify-center cursor-pointer hover:text-textBlack hover:bg-textWhite hover:border hover:border-textGreen hover:-translate-y-2 transition-all ease-in-out duration-300'>
                                    <FaLinkedinIn />
                                </span>
                              </motion.a>


                                <motion.a 
                                initial={{y:20, opacity:0}}
                                animate={{y:0 ,opacity:1}}
                                transition={{ 
                                    delay:0.75,
                                    ease:"easeIn"
                                }}
                                href="https://www.facebook.com/profile.php?id=100090507447954" target='_blank'>
                                  <span className='w-10 h-10 bg-textBlack text-textWhite border border-textWhite rounded-full inline-flex items-center justify-center cursor-pointer hover:text-textBlack hover:bg-textWhite hover:border hover:border-textGreen hover:-translate-y-2 transition-all ease-in-out duration-300'> 
                                    <FaFacebookF />
                                    </span>
                                </motion.a>
                                <motion.a
                                initial={{y:20, opacity:0}}
                                animate={{y:0 ,opacity:1}}
                                transition={{ 
                                    delay:1,
                                    ease:"easeIn"
                                }}
                                href="https://www.instagram.com/_sani_bruh_/?igshid=NTc4MTIwNjQ2YQ%3D%3D" target='_blank'>
                                  <span className='w-10 h-10 bg-textBlack text-textWhite border border-textWhite rounded-full inline-flex items-center justify-center cursor-pointer hover:text-textBlack hover:bg-textWhite hover:border hover:border-textGreen hover:-translate-y-2 transition-all ease-in-out duration-300'> 
                                        <FaInstagram />
                                    </span>
                                </motion.a>
                                <motion.a 
                                 initial={{y:20, opacity:0}}
                                 animate={{y:0 ,opacity:1}}
                                 transition={{ 
                                     delay:0.75,
                                     ease:"easeIn"
                                 }}
                                href="https://twitter.com/sani_bruh_?t=XU_jw7g4YFqAr2W4YfI7Mw&s=09" target='_blank'>
                                  <span className='w-10 h-10 bg-textBlack text-textWhite border border-textWhite rounded-full inline-flex items-center justify-center cursor-pointer hover:text-textBlack hover:bg-textWhite hover:border hover:border-textGreen hover:-translate-y-2 transition-all ease-in-out duration-300'> 
                                        <FaXTwitter />
                                  </span>
                                </motion.a>
                            </div>
                          
                        </div>
                    </motion.div>

                        
                    </div>


                )}

            </div>
            
          </div>
    );
};

export default Header;