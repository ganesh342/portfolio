import React,{useState} from 'react';
import {motion} from 'framer-motion';
const Skills = () => {

  return (
    <motion.div id="skills" className="bg-gray-900 text-5xl font-bold text-red-500 text-center h-100dvh w-100dvw">
        <h1>Skills</h1>
        <motion.div class="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center gap-5 px-5 py-10"><motion.div initial={{ x: '-100%' }} 
    animate={{ x: 0 }}  
    exit={{ x: '100%' }}  transition={{ duration: 0.5 }} class="relative item h-[180px] w-[180px] bg-bodyColor border-4 border-white text-xl font-bodyFont font-bold  text-white flex items-center justify-center rounded-full group perspective-1000">
     <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">

{/* Front Side */}
<div className="absolute w-full h-full border-white rounded-full flex items-center justify-center text-white text-xl font-bold group-hover:hidden">
  React JS
</div>

  <div className="absolute bottom-0 w-full h-full bg-gray-800 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
    <motion.div
      className="absolute bottom-0 w-[200%] h-full"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        repeat: Infinity,
        duration: 4,
        ease: "linear",
      }}
    >
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-full fill-blue-500"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,160L60,149.3C120,139,240,117,360,112C480,107,600,117,720,144C840,171,960,213,1080,213.3C1200,213,1320,171,1380,149.3L1440,128V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0Z"
        />
      </svg>
    </motion.div>

  {/* Percentage Text */}
  <div className="absolute mt-10 px-20 z-10 text-white font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    80%
  </div>
  </div>
</div>
      </motion.div>
      <motion.div initial={{ y: '-100%' }} 
    animate={{ y: 0 }}  
    exit={{ y: '100%' }}  transition={{ duration: 0.5 }} class="relative item h-[180px] w-[180px] bg-bodyColor border-4 border-white text-xl font-bodyFont font-bold  text-white flex items-center justify-center rounded-full group perspective-1000">
     <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">

{/* Front Side */}
<div className="absolute w-full h-full border-white rounded-full flex items-center justify-center text-white text-xl font-bold group-hover:hidden">
  TailWind
</div>

  <div className="absolute bottom-0 w-full h-full bg-gray-800 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
    <motion.div
      className="absolute bottom-0 w-[200%] h-full"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        repeat: Infinity,
        duration: 4,
        ease: "linear",
      }}
    >
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-full fill-blue-500"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,160L60,149.3C120,139,240,117,360,112C480,107,600,117,720,144C840,171,960,213,1080,213.3C1200,213,1320,171,1380,149.3L1440,128V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0Z"
        />
      </svg>
    </motion.div>

  {/* Percentage Text */}
  <div className="absolute mt-10 px-20 z-10 text-white font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    90%
  </div>
  </div>
</div>
      </motion.div>
      <motion.div initial={{ x: '100%' }} 
    animate={{ x: 0 }}  
    exit={{ x: '-100%' }}  transition={{ duration: 0.5 }} class="relative item h-[180px] w-[180px] bg-bodyColor border-4 border-white text-xl font-bodyFont font-bold  text-white flex items-center justify-center rounded-full group perspective-1000">
     <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">

{/* Front Side */}
<div className="absolute w-full h-full border-white rounded-full flex items-center justify-center text-white text-xl font-bold group-hover:hidden">
  C++
</div>

  <div className="absolute bottom-0 w-full h-full bg-gray-800 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
    <motion.div
      className="absolute bottom-0 w-[200%] h-full"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        repeat: Infinity,
        duration: 4,
        ease: "linear",
      }}
    >
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-full fill-blue-500"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,160L60,149.3C120,139,240,117,360,112C480,107,600,117,720,144C840,171,960,213,1080,213.3C1200,213,1320,171,1380,149.3L1440,128V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0Z"
        />
      </svg>
    </motion.div>

  {/* Percentage Text */}
  <div className="absolute mt-10 px-20 z-10 text-white font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    95%
  </div>
  </div>
</div>
      </motion.div>
      <motion.div initial={{ x: '-100%' }} 
    animate={{ x: 0 }}  
    exit={{ x: '100%' }}  transition={{ duration: 0.5 }} class="relative item h-[180px] w-[180px] bg-bodyColor border-4 border-white text-xl font-bodyFont font-bold  text-white flex items-center justify-center rounded-full group perspective-1000">
     <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">

{/* Front Side */}
<div className="absolute w-full h-full border-white rounded-full flex items-center justify-center text-white text-xl font-bold group-hover:hidden">
  Node JS
</div>

  <div className="absolute bottom-0 w-full h-full bg-gray-800 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
    <motion.div
      className="absolute bottom-0 w-[200%] h-full"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        repeat: Infinity,
        duration: 4,
        ease: "linear",
      }}
    >
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-full fill-blue-500"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,160L60,149.3C120,139,240,117,360,112C480,107,600,117,720,144C840,171,960,213,1080,213.3C1200,213,1320,171,1380,149.3L1440,128V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0Z"
        />
      </svg>
    </motion.div>

  {/* Percentage Text */}
  <div className="absolute mt-10 px-20 z-10 text-white font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    90%
  </div>
  </div>
</div>
      </motion.div><motion.div initial={{ y: '100%' }} 
    animate={{ y: 0 }}  
    exit={{ y: '100%' }}  transition={{ duration: 0.5 }} class="relative item h-[180px] w-[180px] bg-bodyColor border-4 border-white text-xl font-bodyFont font-bold  text-white flex items-center justify-center rounded-full group perspective-1000">
     <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">

{/* Front Side */}
<div className="absolute w-full h-full border-white rounded-full flex items-center justify-center text-white text-xl font-bold group-hover:hidden">
  Express JS
</div>

  <div className="absolute bottom-0 w-full h-full bg-gray-800 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
    <motion.div
      className="absolute bottom-0 w-[200%] h-full"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        repeat: Infinity,
        duration: 4,
        ease: "linear",
      }}
    >
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-full fill-blue-500"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,160L60,149.3C120,139,240,117,360,112C480,107,600,117,720,144C840,171,960,213,1080,213.3C1200,213,1320,171,1380,149.3L1440,128V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0Z"
        />
      </svg>
    </motion.div>

  {/* Percentage Text */}
  <div className="absolute mt-10 px-20 z-10 text-white font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    70%
  </div>
  </div>
</div>
      </motion.div>
      <motion.div initial={{ x: '100%' }} 
    animate={{ x: 0 }}  
    exit={{ x: '-100%' }}  transition={{ duration: 0.5 }} class="relative item h-[180px] w-[180px] bg-bodyColor border-4 border-white text-xl font-bodyFont font-bold  text-white flex items-center justify-center rounded-full group perspective-1000">
     <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">

{/* Front Side */}
<div className="absolute w-full h-full border-white rounded-full flex items-center justify-center text-white text-xl font-bold group-hover:hidden">
  Mongo DB
</div>

  <div className="absolute bottom-0 w-full h-full bg-gray-800 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
    <motion.div
      className="absolute bottom-0 w-[200%] h-full"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        repeat: Infinity,
        duration: 4,
        ease: "linear",
      }}
    >
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-full fill-blue-500"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,160L60,149.3C120,139,240,117,360,112C480,107,600,117,720,144C840,171,960,213,1080,213.3C1200,213,1320,171,1380,149.3L1440,128V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0Z"
        />
      </svg>
    </motion.div>

  {/* Percentage Text */}
  <div className="absolute mt-10 px-20 z-10 text-white font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    75%
  </div>
  </div>
</div>
      </motion.div></motion.div>
    </motion.div>
  )
}

export default Skills
