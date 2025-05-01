import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-gray-900 opacity-4 screen w-screen-dynamic flex flex-col md:flex-row items-center justify-between mt-0 md:py-30 py-10">
      <div className="text-gray-400 text-xl font-semibold uppercase px-5">Pilla Ganesh</div>
      <ul className="grid grid-cols-1 min-300-grid min-500-grid gap-1 md:gap-4">
        <li><a href="#home" className="text-gray-400 hover:text-red-700 px-5 text-xl font-semibold cursor-pointer">Home</a></li>
        <li><a href="#skills" className="text-gray-400 hover:text-red-700 px-5 text-xl font-semibold cursor-pointer">Skills</a></li>
        <li><a href="#projects" className="text-gray-400 hover:text-red-700 px-5 text-xl font-semibold cursor-pointer">Projects</a></li>
        <li><a href="#profiles" className="text-gray-400 hover:text-red-700 px-5 text-xl font-semibold cursor-pointer">Profiles</a></li>
        <li><a href="#contact" className="text-gray-400 hover:text-red-700 px-5 text-xl font-semibold cursor-pointer">Contact</a></li>
      </ul>
    </div>
  )
}

export default Navbar
