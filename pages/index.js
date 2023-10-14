import Image from "next/image";
import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'
import { motion } from "framer-motion";
import { fadeIn } from '../variants'

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradeint-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col h-full justify-center xl:pt-20 xl:text-left container mx-auto">
          <motion.h1 
            className="h1"
            variants={fadeIn('down',0.2)} 
            initial='hidden' 
            animate='show' 
            exit='hidden' 
          >
            Transforming Ideas <br/> Into{' '}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>
          <motion.p 
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
            variants={fadeIn('down',0.3)} 
            initial='hidden' 
            animate='show' 
            exit='hidden' 
          >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn/>
          </div>
          <motion.div 
            variants={fadeIn('down',0.4)} 
            initial='hidden' 
            animate='show' 
            exit='hidden' 
            className="hidden xl:flex"
          >
            <ProjectsBtn/>
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
      </div>
    </div>
  )
};

export default Home;
