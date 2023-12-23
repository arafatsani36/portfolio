import React from 'react';
import {FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";

const LeftSideBar = () => {
    return (
        <div className='w-full h-full flex flex-col items-center justify-end gap-4'>
           <div className='flex flex-col gap-4'>
            <a href="https://github.com/arafatsani36" target='_blank'>
                <span className='w-10 h-10 bg-hoverColor text-textDarkDeep rounded-full inline-flex items-center justify-center cursor-pointer hover:text-textGreen hover:bg-bodyColor hover:-translate-y-2 transition-all ease-in-out duration-300'><LuGithub /></span>

            </a>   
            <a href="https://www.linkedin.com/in/jakaria-hossain-sani-bb5466280/" target='_blank'>
                <span className='w-10 h-10 bg-hoverColor rounded-full inline-flex items-center justify-center cursor-pointer hover:text-textGreen hover:bg-bodyColor hover:-translate-y-2 transition-all ease-in-out duration-300'>
                    <FaLinkedinIn />
                </span>
            </a>


            <a href="https://www.facebook.com/profile.php?id=100090507447954" target='_blank'>
                <span className='w-10 h-10 bg-hoverColor rounded-full inline-flex items-center justify-center cursor-pointer hover:text-textGreen hover:bg-bodyColor hover:-translate-y-2 transition-all ease-in-out duration-300'> 
                   <FaFacebookF />
                </span>
            </a>
            <a href="https://www.instagram.com/_sani_bruh_/?igshid=NTc4MTIwNjQ2YQ%3D%3D" target='_blank'>
                <span className='w-10 h-10 bg-hoverColor rounded-full inline-flex items-center justify-center cursor-pointer hover:text-textGreen hover:bg-bodyColor hover:-translate-y-2 transition-all ease-in-out duration-300'> 
                    <FaInstagram />
                </span>
            </a>
            <a href="https://twitter.com/sani_bruh_?t=XU_jw7g4YFqAr2W4YfI7Mw&s=09" target='_blank'>
                <span className='w-10 h-10 bg-hoverColor rounded-full inline-flex items-center justify-center cursor-pointer hover:text-textGreen hover:bg-bodyColor hover:-translate-y-2 transition-all ease-in-out duration-300'> 
                    <FaXTwitter />
                </span>
            </a>
           </div>

           <div className='w-[2px] h-32 bg-textDarkDeep'>
           </div>
        </div>
    );
};

export default LeftSideBar;