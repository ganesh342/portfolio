import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./Navbar";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Profiles from "./Profiles";
import Contact from "./Contact";
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/profiles" element={<Profiles/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
