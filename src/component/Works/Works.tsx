import React from 'react';
import TitleSection from '../TitleSection/TitleSection';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Works = () => {
    return (
        <div id='works' className='max-w-container py-6 lgl:py-14 mx-auto flex flex-col gap-6'>
             <TitleSection title ="My Works" ></TitleSection>

             <div className='works grid grid-cols sml:grid-cols-1 mdl:grid-cols-1 lgl:grid-cols-2 items-center justify-center lgl:flex-row   gap-6  mt-10'>

                <div className='border border-textDarkDeep p-2 rounded-md'>
                  <div className='worksBox worksBox1'> 
                  </div>

                 
                    <h2 className='text-lg font-bold mt-4 ml-2 md:ml-0 lg:ml-0'>JobLinker<span className=' text-sky-600'>(Team Project)</span> - <span className=' text-rose-600'>(Mern Stack)</span></h2>
                    
                    <div className='project-link flex ml-2 md:ml-0 lg:ml-0 my-2'>
                      <a className='text-lg font-semibold mr-4' href="https://job-linker-seven.vercel.app/" target='_blank' rel="noopener noreferrer">Live Link</a>
                      <a className='text-lg font-semibold flex items-center' href="https://github.com/arafatsani36/jobLinker" target='_blank' rel="noopener noreferrer">Git Link</a>
                    </div>
                      <p>Click <span className=' text-lg font-bold '>Details</span> Button To Get More Details About Project.</p>
                      <button className='flex items-center border border-textDarkDeep py-[5px] px-4 rounded-lg mt-3 font-semibold hover:bg-textDarkDeep hover:text-textWhite transition-all ease-in duration-300'>Details <span className='ml-3'><FaExternalLinkAlt /></span></button>
                </div>


                <div className='border border-textDarkDeep p-2 rounded-md'>
                  <div className='worksBox worksBox2'> 
                  </div>
                    <h2 className='text-lg font-bold primary-text-color mt-4 ml-2 md:ml-0 lg:ml-0'>Toy Shop - <span className=' text-rose-600'>(Mern Stack)</span></h2>
                    
                    <div className='project-link flex ml-2 md:ml-0 lg:ml-0 my-2'>
                      <a className='text-lg font-semibold mr-4' href="https://toy-sports-car-clicnt.web.app/" target='_blank' rel="noopener noreferrer">Live Link</a>
                      <a className='text-lg font-semibold mr-4' href="https://github.com/arafatsani36/toy-sports-car-clicnt" target='_blank' rel="noopener noreferrer">Client Git</a>
                      <a className='text-lg font-semibold' href="https://github.com/arafatsani36/toy-sports-car-server" target='_blank' rel="noopener noreferrer">Server Git</a>
                    </div>
                      <p>Click <span className=' text-lg font-bold '>Details</span> Button To Get More Details About Project.</p>
                      <button className='flex items-center border border-textDarkDeep py-[5px] px-4 rounded-lg mt-3 font-semibold hover:bg-textDarkDeep hover:text-textWhite transition-all ease-in duration-300'>Details <span className='ml-3'><FaExternalLinkAlt /></span></button>
                </div>


                <div className='border border-textDarkDeep p-2 rounded-md'>
                  <div className='worksBox worksBox3'> 
                  </div>
                    <h2 className='text-lg font-bold primary-text-color mt-4 ml-2 md:ml-0 lg:ml-0'>Carenow hospitals - <span className=' text-rose-600'>(Front end)</span></h2>
                    
                    <div className='project-link flex ml-2 md:ml-0 lg:ml-0 my-2'>
                      <a className='text-lg font-semibold mr-4' href="https://carenowhospitals-clients-e2426.web.app/" target='_blank' rel="noopener noreferrer">Live Link</a>
                      <a className='text-lg font-semibold mr-4' href="https://github.com/arafatsani36/carenow_hospitals_clicnt-" target='_blank' rel="noopener noreferrer">Git Link</a>
                    </div>
                      <p>Click <span className=' text-lg font-bold '>Details</span> Button To Get More Details About Project.</p>
                      <button className='flex items-center border border-textDarkDeep py-[5px] px-4 rounded-lg mt-3 font-semibold hover:bg-textDarkDeep hover:text-textWhite transition-all ease-in duration-300'>Details <span className='ml-3'><FaExternalLinkAlt /></span></button>
                </div>
                
            </div>
        </div>
    );
};

export default Works;