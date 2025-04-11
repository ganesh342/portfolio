import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-stone-800 opacity-4 screen flex flex-row items-center justify-between mt-0 py-10">
      <div className="text-gray-400 text-xl font-semibold uppercase px-5">Pilla Ganesh</div>
      <div className="flex flex-row items-center justify-center">
        <a href="/" className="text-gray-400 hover:text-red-700 px-5 text-xl font-semibold cursor-pointer">Home</a>
        <a href="/skills" className="text-gray-400 hover:text-red-700 px-5 text-xl font-semibold cursor-pointer">Skills</a>
        <a href="/projects" className="text-gray-400 hover:text-red-700 px-5 text-xl font-semibold cursor-pointer">Projects</a>
        <a href="/profiles" className="text-gray-400 hover:text-red-700 px-5 text-xl font-semibold cursor-pointer">Profiles</a>
        <a href="/contact" className="text-gray-400 hover:text-red-700 px-5 text-xl font-semibold cursor-pointer">Contact</a>
      </div>
    </div>
  )
}

export default Navbar
