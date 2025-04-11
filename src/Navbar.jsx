import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-stone-800 opacity-4 screen flex flex-row items-center justify-between mt-0 py-10">
      <div className="text-gray-400 text-xl font-semibold uppercase px-5">Pilla Ganesh</div>
      <div className="flex flex-row items-center justify-center">
        <Link to="/" className="text-gray-400 hover:text-red-700 px-5 text-xl font-semibold cursor-pointer">Home</Link>
        <Link to="/skills" className="text-gray-400 hover:text-red-700 px-5 text-xl font-semibold cursor-pointer">Skills</Link>
        <Link to="/projects" className="text-gray-400 hover:text-red-700 px-5 text-xl font-semibold cursor-pointer">Projects</Link>
        <Link to="/profiles" className="text-gray-400 hover:text-red-700 px-5 text-xl font-semibold cursor-pointer">Profiles</Link>
        <Link to="/contact" className="text-gray-400 hover:text-red-700 px-5 text-xl font-semibold cursor-pointer">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
