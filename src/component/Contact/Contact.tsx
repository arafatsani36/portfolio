"use client"
import TitleSection from '../TitleSection/TitleSection';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { motion } from "framer-motion"
import contacetImg from '../../asserts/contacet/contact1.gif'
import Image from 'next/image';

const Contact = () => {
    
    return (
        <motion.div
                    initial={{y:500, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{ duration:0.5, staggerChildren:0.1}} 
                    className='max-w-container py-6 lgl:py-14 mx-auto flex flex-col gap-6 '
                    id='contact'
                >
                    <TitleSection title='Contact Me'></TitleSection>

                    <motion.div className='contact grid grid-cols-1 md:grid-cols-2 gap-10 justify-between items-center'>
                    <div>
                    <div className='mb-6'>
                        <h1 className=' text-2xl font-bold'>Contact on Phone</h1>
                        <p className=' text-base flex items-center'><span className='mr-2'><FaPhoneAlt /></span> +8801990447791</p>
                    </div>
                    <div className=' my-6'>
                        <h1 className=' text-2xl font-bold'>Contact on Email</h1>
                        <p className=' text-base flex items-center'><span className='mr-2 text-lg'><MdEmail /> </span> jakariahossainsani@gmail.com</p>
                    </div>
                    <div>
                        <h1 className=' text-2xl font-bold'>Contact on Address</h1>
                        <p className=' text-base flex items-center'><span className='mr-2 text-lg'><IoIosHome /></span> Uttara, Dhaka, Bangladesh</p>
                    </div>
                   </div>

                   <div className=' hidden md:block'>
                    <Image src={contacetImg} alt='' className='w-[100%]'/>
                   </div>
                
             </motion.div>
          </motion.div>
       
        
    );
};

export default Contact;