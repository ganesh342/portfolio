import React from 'react'
import {motion} from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
function Profiles () {
  return (
    <motion.div id="profiles" className="bg-gray-900 text-5xl font-bold text-red-500 text-center h-200dvh w-100dvw">
      <h1>Coding Profiles</h1>
      <motion.div className="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center gap-5 px-5 py-10">
        <motion.div initial={{ x: '-100%' }} 
    animate={{ x: 0 }}  
    exit={{ x: '100%' }} transition={{duration:0.5}}>
        <motion.div className="flex flex-col items-center justify-center shadow-slate-950 transition-transform duration-300 hover:scale-110">
          <img src="https://portfolio-1-psi-three.vercel.app/assets/leetcode-NoYIvSEC.jpeg" className="w-[400px] h-60"/>
          <motion.div className="text-center text-[20px] py-10 text-white">SOLVED:564</motion.div>
          <a href="https://leetcode.com/u/ganesh341/" className="text-[20px] text-red-700 text-sm transition-transform duration-300 hover:text-white hover:scale-110">VIEW</a>
        </motion.div>
        </motion.div>
        <motion.div initial={{ y: '-100%' }} 
    animate={{ y: 0 }}  
    exit={{ y: '100%' }} transition={{duration:0.5}}>
        <motion.div className="flex flex-col items-center justify-center shadow-slate-950 transition-transform duration-300 hover:scale-110">
          <img src="https://portfolio-1-psi-three.vercel.app/assets/cc-logo-sd-B7vW0blK.png" className="w-[400px] h-60"/>
          <motion.div className="text-center text-[20px] py-10 text-white">SOLVED:349</motion.div>
          <a href="https://codechef.com/users/gani342" className="text-[20px] text-red-700 text-sm transition-transform duration-300 hover:text-white hover:scale-110">VIEW</a>
          </motion.div>
          </motion.div>
          <motion.div initial={{ x: '100%' }} 
    animate={{ x: 0 }}  
    exit={{ x: '100%' }} transition={{duration:0.5}}>
        <motion.div className="flex flex-col items-center justify-center shadow-slate-950 transition-transform duration-300 hover:scale-110">
          <img src="https://portfolio-1-psi-three.vercel.app/assets/gfg-2rhM-Pqj.jpeg" className="w-[400px] h-60"/>
          <motion.div className="text-center text-[20px] py-10 text-white">SOLVED:34</motion.div>
          <a href="https://www.geeksforgeeks.org/user/ganeshpilpnw1/" className="text-[20px] text-red-700 text-sm transition-transform duration-300 hover:text-white hover:scale-110">VIEW</a>
          </motion.div>
        </motion.div>
        </motion.div>
      </motion.div>
  )
}

export default Profiles;
