import Image from 'next/image';
import React from 'react';
import errorImg from '../asserts/error/error.gif'
import { FaArrowLeft } from "react-icons/fa6";

const notFound = () => {
    return (
        <div className='h-screen flex items-center justify-center bg-errorBg'>
            <div className='text-center'>
                <Image src={errorImg} alt='' className=' w-32 mx-auto'/>
                <h2 className=' font-bold text-lg mb-2'>404 Page Not Found</h2>
                <p className='text-lg mb-6'>The page you are looking for doesnot exist or has been moved</p>
                <a className=' p-2 border border-textBlack rounded-md hover:bg-bodyColor hover:text-textWhite cursor-pointer duration-200 transition flex w-36 mx-auto items-center' href="/"><FaArrowLeft className='mr-2'/> Back to home</a>
            </div>
        </div>
    );
};

export default notFound;