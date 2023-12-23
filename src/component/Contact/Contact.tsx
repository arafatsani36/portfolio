"use client"
import React, { useRef } from 'react';
import TitleSection from '../TitleSection/TitleSection';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { motion } from "framer-motion"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendMail = (e: any) => {
      e.preventDefault();
      emailjs
      .sendForm('service_bx950s4', 'template_sjsog39', form.current, 'HrCd-z6zCt590WOa8')
      .then(
        () => {
          toast.success('Message sent');
        },
        () => {
          toast.error('Something went wrong');
        }
      );

      e.target.reset();
    }

    return (
        <motion.div
            initial={{y:500, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{ duration:0.5, staggerChildren:0.1}} 
            className='max-w-container py-6 lgl:py-14 mx-auto flex flex-col gap-6'
            id='contact'
        >
            <TitleSection title='Contact Me'></TitleSection>

            <motion.div
             
             className='contact grid grid-cols-1 md:grid-cols-2 gap-10 justify-between items-center'
            >
                <div>
                    <div className=' my-3'>
                        <h1 className=' text-xl font-bold'>Contact on Phone</h1>
                        <p className=' text-base flex items-center'><span className='mr-2'><FaPhoneAlt /></span> +8801990447791</p>
                    </div>
                    <div className=' my-3'>
                        <h1 className=' text-xl font-bold'>Contact on Email</h1>
                        <p className=' text-base flex items-center'><span className='mr-2 text-lg'><MdEmail /> </span> jakariahossainsani@gmail.com</p>
                    </div>
                    <div>
                        <h1 className=' text-xl font-bold'>Contact on Address</h1>
                        <p className=' text-base flex items-center'><span className='mr-2 text-lg'><IoIosHome /></span> Uttara, Dhaka, Bangladesh</p>
                    </div>
                </div>

                <div>
                    <form ref={form} onSubmit={sendMail}>
                        <input className='block inputBox border border-textDarkDeep p-[6px] rounded-md mb-2' style={{width:"100%"}}  type="text" placeholder='Your Name' name='from_name' required/>
                        <input className='block border border-textDarkDeep p-[6px] rounded-md mb-2' style={{width:"100%"}} type="email"  id="" placeholder='Your Email' name='from_name' required/>
                        <textarea className='block border border-textDarkDeep p-[6px] rounded-md' style={{width:"100%"}} rows={6} placeholder='Your Message' name='from_name'></textarea>
                        <button type="submit" className='block border border-textDarkDeep rounded-md p-[6px] mt-3 hover:bg-textDarkDeep hover:text-textWhite transition-all ease-in duration-300' style={{width:"100%"}}>Submit</button>
                    </form>
                </div>
                <ToastContainer  position="top-center" hideProgressBar={true} theme="light"/>
            </motion.div>
        </motion.div>
    );
};

export default Contact;