import React from 'react'
import {motion} from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
function Projects () {
  return (
    <motion.div id="projects" className="bg-gray-900 text-5xl font-bold text-red-500 text-center w-screen-dynamic h-screen-dynamic">
      <h1>Projects</h1>
      <motion.div className="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center gap-5 px-5 py-10">
        <motion.div  initial={{ x: '-100%' }} 
    animate={{ x: 0 }}  
    exit={{ x: '100%' }} transition={{duration:0.5}}>
        <motion.div className="flex flex-col items-start justify-center border-4 border-stone-700 transition-transform duration-300 hover:scale-110">
          <img src="chatapp.jpeg" className="w-[500px] h-60"/>
          <motion.div className="flex flex-row items-center justify-between px-3 py-3">
          <motion.div className="text-xl font-normal">Chat App</motion.div>
          <motion.div className="text-xl border-5 border-black rounded-full transition-transform duration-300 hover:scale-110">
          <a href="https://github.com/ganesh342/Chat-Application" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="1x" /></a>
          </motion.div>
          </motion.div>
          <motion.div className="text-left text-sm font-normal text-white">
          The Real-Time Chat Application is a dynamic and interactive chat platform built with React and Firebase. This application allows users to communicate in real-time, offering a seamless messaging experience with live updates and robust backend support
          </motion.div>
        </motion.div>
        </motion.div>
        <motion.div initial={{ y: '-100%' }} 
    animate={{ y: 0 }}  
    exit={{ y: '100%' }} transition={{duration:0.5}}>
        <motion.div className="flex flex-col items-start justify-center border-4 border-stone-700 transition-transform duration-300 hover:scale-110">
          <img src="ecom.jpeg" className="w-[500px] h-60"/>
          <motion.div className="flex flex-row items-center justify-between px-3 py-3">
          <motion.div className="text-xl font-normal">E-commerce App</motion.div>
          <motion.div className="text-xl border-5 border-black rounded-full transition-transform duration-300 hover:scale-110">
          <a href="https://github.com/ganesh342/ecom-app" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="1x" /></a>
          </motion.div>
          </motion.div>
          <motion.div className="text-left text-sm font-normal text-white">
          Building an eCommerce web application with React.js, Node.js, and MongoDB involves creating a seamless interaction between the frontend, backend, and database. React.js handles the user interface and client-side logic, Node.js manages server-side operations and API interactions.
          </motion.div>
        </motion.div>
        </motion.div>
        <motion.div initial={{ x: '100%' }} 
    animate={{ x: 0 }}  
    exit={{ x: '100%' }} transition={{duration:0.5}}>
        <motion.div className="flex flex-col items-start justify-center border-4 border-stone-700 transition-transform duration-300 hover:scale-110">
          <img src="weathers.jpeg" className="w-[500px] h-60"/>
          <motion.div className="flex flex-row items-center justify-between px-3 py-3">
          <motion.div className="text-xl font-normal">Weather App</motion.div>
          <motion.div className="text-xl border-5 border-black rounded-full transition-transform duration-300 hover:scale-110">
          <a href="https://github.com/ganesh342/weather-app" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="1x" /></a>
          </motion.div>
          </motion.div>
          <motion.div className="text-left text-sm font-normal text-white">
          Creating a weather application using React and Tailwind CSS involves developing a modern, user-friendly interface that efficiently displays weather data. React handles application's user interface and state management, leveraging component-based architecture to create interactive experience.
          </motion.div>
        </motion.div>
      </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Projects;
