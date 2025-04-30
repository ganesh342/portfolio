import React from 'react';
import {motion} from 'framer-motion';
const Skills = () => {
  return (
    <motion.div id="skills" className="bg-stone-800 text-5xl font-bold text-red-500 text-center w-screen-dynamic h-screen-dynamic">
        <h1>Skills</h1>
        <motion.div class="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center gap-5 px-5 py-10"><motion.div initial={{ x: '-100%' }} 
    animate={{ x: 0 }}  
    exit={{ x: '100%' }}  transition={{ duration: 0.5 }} class="item h-[180px] w-[180px] bg-bodyColor border-4 border-white text-xl font-bodyFont font-bold  text-white flex items-center justify-center rounded-full">React js</motion.div><motion.div initial={{ y: '-100%' }} 
    animate={{ y: 0 }}  
    exit={{ y: '100%' }}  transition={{ duration: 0.5 }} class="item h-[180px] w-[180px] bg-bodyColor border-4 border-white text-xl font-bodyFont font-bold  text-white flex items-center justify-center rounded-full">Tailwind</motion.div><motion.div initial={{ x: '100%' }} 
    animate={{ x: 0 }}  
    exit={{ x: '100%' }}  transition={{ duration: 0.5 }} class="item h-[180px] w-[180px] bg-bodyColor border-4 border-white text-xl font-bodyFont font-bold  text-white flex items-center justify-center rounded-full">c++</motion.div><motion.div initial={{ x: '-100%' }} 
    animate={{ x: 0 }}  
    exit={{ x: '100%' }}  transition={{ duration: 0.5 }} class="item h-[180px] w-[180px] bg-bodyColor border-4 border-white text-xl font-bodyFont font-bold  text-white flex items-center justify-center rounded-full">Node js</motion.div><motion.div initial={{ y: '100%' }} 
    animate={{ y: 0 }}  
    exit={{ y: '100%' }}  transition={{ duration: 0.5 }} class="item h-[180px] w-[180px] bg-bodyColor border-4 border-white text-xl font-bodyFont font-bold  text-white flex items-center justify-center rounded-full">Express js</motion.div><motion.div initial={{ x: '100%' }} 
    animate={{ x: 0 }}  
    exit={{ x: '100%' }}  transition={{ duration: 0.5 }} class="item h-[180px] w-[180px] bg-bodyColor border-4 border-white text-xl font-bodyFont font-bold  text-white flex items-center justify-center rounded-full">Mongo Db</motion.div></motion.div>
    </motion.div>
  )
}

export default Skills
