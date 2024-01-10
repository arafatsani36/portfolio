"use client"
import About from '@/component/About/About'
import Awards from '@/component/Awards/Awards'
import Banner from '@/component/Banner/Banner'
import Contact from '@/component/Contact/Contact'
import Footer from '@/component/Footer/Footer'
import Header from '@/component/Header/Header'
import LeftSideBar from '@/component/LeftSideBar/LeftSideBar'
import RightSideBar from '@/component/RightSideBar/RightSideBar'
import Skill from '@/component/Skill/Skill'
import Works from '@/component/Works/Works'
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div>
     <Header></Header>
      <div className="flex">
        <motion.div
          initial={{ opacity:0}}
          animate={{opacity:1}}
          transition={{ delay:0.5}}  
          className=" hidden xl:inline-flex w-[10%] h-full fixed left-0 bottom-0"
        >
          <LeftSideBar></LeftSideBar>
        </motion.div>

        <div className="w-[78%] mx-auto ">
         <Banner></Banner>
          <About></About>
          <Skill></Skill>
          <Awards></Awards>
          <Works></Works>
          <Contact></Contact>
          <Footer></Footer>
        </div>

        <motion.div 
        className="hidden xl:inline-flex w-[10%] h-full fixed right-0 bottom-0"
        initial={{ opacity:0}}
        animate={{opacity:1}}
        transition={{ delay:0.5}}
        >
        <RightSideBar></RightSideBar>
        </motion.div>
        
      </div>



    </div>
  )
}
