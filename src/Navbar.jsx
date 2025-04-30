import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-stone-800 opacity-4 screen w-screen-dynamic flex flex-row items-center justify-between mt-0 py-10">
      <div className="text-gray-400 text-xl font-semibold uppercase px-5">Pilla Ganesh</div>
      <ul className="flex flex-row items-center justify-center">
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
