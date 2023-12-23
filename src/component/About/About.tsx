import React from 'react';
import TitleSection from '../TitleSection/TitleSection';
import aboutImg from '../../asserts/aboutImg.gif'
import Image from 'next/image';
import { PiShootingStarThin } from "react-icons/pi";


const About = () => {
    return (
        <div id='about' className='max-w-contentContainer mx-auto py-10 lgl:py-32 flex flex-col gap-6'>         
            <TitleSection title ="About Me" ></TitleSection>
            <div className='flex flex-col items-center justify-center lgl:flex-row gap-6'>
                <div className=' w-full lgl:w-2/3 text-base flex flex-col gap-6'>
                    <p className='text-base md:text-lg'>
                    Hello, I am Jakaria Hossain Sani, a passionate and dedicated Front-End Developer based in Bangladesh with experience in both small and large projects. I possess strong time management skills and am committed to learning new technology every single day. My primary career goal is to continually grow and excel as a professional in the field of web development. I am determined to contribute meaningfully to both the organization and the industry as I pursue ongoing learning and development.
                    </p>
                </div>
                <div className=' md:mt[-20px]'>
                    <Image className='h-full object-cover' src={aboutImg} alt=''/>
                </div>
            </div>
        </div>
    );
};

export default About;