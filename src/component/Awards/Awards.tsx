import React from 'react';
import TitleSection from '../TitleSection/TitleSection';
import certificate from '../../asserts/certificate.jpg'
import Image from 'next/image';

const Awards = () => {
    return (
        <div id='awards' className='max-w-container py-6 lgl:py-14 mx-auto flex flex-col gap-6'>
            <TitleSection title="Awards" ></TitleSection>
            <div className=''>
                <Image className=' cursor-pointer sml-[100%]' src={certificate} alt=''   width={0} height={0} ></Image>
            </div>
        </div>
    );
};

export default Awards;