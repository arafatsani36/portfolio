import React from 'react';
import TitleSection from '../TitleSection/TitleSection';
import html from '../../asserts/skill/html.png'
import css from '../../asserts/skill/css.png'
import bootstrap from '../../asserts/skill/bootstrap.png'
import tailwind from '../../asserts/skill/tailwind.png'
import javascript from '../../asserts/skill/javascript.png'
import react from '../../asserts/skill/react.png'
import typescript from '../../asserts/skill/typescript.png'
import firebase from '../../asserts/skill/firebase.png'
import node from '../../asserts/skill/node-js.png'
import express from '../../asserts/skill/express.png'
import MongoDB from '../../asserts/skill/MongoDB.png'
import Next from '../../asserts/skill/Next.js.png'
import figma from '../../asserts/skill/figma.png'
import Git from '../../asserts/skill/Git.png'
import Github from '../../asserts/skill/Github.png'

import Image from 'next/image';

const Skill = () => {
    return (
        <div id='skill' className=' max-w-contentContainer mx-auto py-10 lgl:py-32 flex flex-col gap-6'>
            <TitleSection title ="My Skill" ></TitleSection>

            <div className='grid grid-cols-2 sml:grid-cols-3 mdl:grid-cols-4 lgl:grid-cols-8 items-center justify-center lgl:flex-row gap-6'>
                <div>
                    <div className='border border-textDarkDeep p-4 cursor-pointer box'>
                        <Image src={html} alt=''></Image>
                        <h3 className='text-center mt-2 text-base font-bold'>HTML</h3>
                    </div>
                </div>

                <div>
                <div className=' border border-textDarkDeep p-4 cursor-pointer box'>
                    <Image src={css} alt=''></Image>
                    <h3 className='text-center mt-2 font-bold'>CSS</h3>
                </div>
                </div>

                <div>
                <div className=' border border-textDarkDeep p-4 cursor-pointer box'>
                   <Image src={bootstrap} alt=''></Image>
                    <h3 className='text-center mt-2 font-bold'>Bootstrap</h3>
                </div>
                </div>

                <div>
                <div className=' border border-textDarkDeep p-4 cursor-pointer box'>
                    <Image src={tailwind} alt=''></Image>
                    <h3 className='text-center mt-2 font-bold'>Tailwind</h3>
                </div>
                </div>

                <div>
                <div className=' border border-textDarkDeep p-4 cursor-pointer box'>
                    <Image src={javascript} alt=''></Image>
                    <h3 className='text-center mt-2 font-bold'>Javascript</h3>
                </div>
                </div>

                <div>
                <div className=' border border-textDarkDeep p-4 cursor-pointer box'>
                    <Image src={react} alt=''></Image>
                    <h3 className='text-center mt-2 font-bold'>React.js</h3>
                </div>
                </div>

                <div>
                <div className=' border border-textDarkDeep p-4 cursor-pointer box'>
                    <Image src={typescript} alt=''></Image>
                    <h3 className='text-center mt-2 font-bold'>Typescript</h3>
                </div>
                </div>

                <div>
                <div className=' border border-textDarkDeep p-4 cursor-pointer box'>
                    <Image src={firebase} alt=''></Image>
                    <h3 className='text-center mt-2 font-bold'>Firebase</h3>
                </div>
                </div>

                <div>
                <div className=' border border-textDarkDeep p-4 cursor-pointer box'>
                    <Image src={node} alt=''></Image>
                    <h3 className='text-center mt-2 font-bold'>Node.js</h3>
                </div>
                </div>

                <div>
                <div className=' border border-textDarkDeep p-4 cursor-pointer box'>
                    <Image src={express} alt=''></Image>
                    <h3 className='text-center mt-2 font-bold'>Express.js</h3>
                </div>
                </div>

                <div>
                <div className=' border border-textDarkDeep p-4 cursor-pointer box'>
                    <Image src={MongoDB} alt=''></Image>
                    <h3 className='text-center mt-2 font-bold'>Mongodb</h3>
                </div>
                </div>

                <div>
                <div className=' border border-textDarkDeep p-4 cursor-pointer box'>
                    <Image src={Next} alt=''></Image>
                    <h3 className='text-center mt-2 font-bold'>Next.Js</h3>
                </div>
                </div>

                <div>
                <div className=' border border-textDarkDeep p-4 cursor-pointer box'>
                    <Image src={figma} alt=''></Image>
                    <h3 className='text-center mt-2 font-bold'>Figma</h3>
                </div>
                </div>
                <div>
                <div className=' border border-textDarkDeep p-4 cursor-pointer box'>
                    <Image src={Git} alt=''></Image>
                    <h3 className='text-center mt-2 font-bold'>Git</h3>
                </div>
                </div>
                <div>
                <div className=' border border-textDarkDeep p-4 cursor-pointer box'>
                    <Image src={Github} alt=''></Image>
                    <h3 className='text-center mt-2 font-bold'>Github</h3>
                </div>
                </div>

            </div>
        </div>
    );
};

export default Skill;