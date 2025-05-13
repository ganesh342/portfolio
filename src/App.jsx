import { useState ,useEffect } from 'react'
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
  // useEffect(() => {
  //   const setViewportUnits = () => {
  //     const vh = window.innerHeight * 0.01;
  //     const vw = window.innerWidth * 0.01;
  //     document.documentElement.style.setProperty('--vh', `${vh}px`);
  //     document.documentElement.style.setProperty('--vw', `${vw}px`);
  //   };

  //   setViewportUnits();
  //   window.addEventListener('resize', setViewportUnits);

  //   return () => {
  //     window.removeEventListener('resize', setViewportUnits);
  //   };
  // }, []);

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
