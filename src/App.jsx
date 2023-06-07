import React, { useState, useEffect } from 'react'
import "../script"
import './App.css'

import Home from './pages/Home/Home'
import NavBar  from './pages/NavBar/NavBar'
import About from './pages/About/About'
import Skills from './pages/Skills/Skills'
import Why from './pages/Why/Why'
import Service from './pages/Service/Service'
import Proyectos from './pages/Proyectos/Proyectos'
import Contact from './pages/Contact/Contact'
import Footer from './pages/Footer/Footer'
import Proeloader from './pages/Preloader/Proeloader'
import { inject } from '@vercel/analytics'

inject()

function App() {


  return (
    <>
      
      <NavBar />
      <Home  />
      <About />
      <Skills />
      <Why />
      <Service />
      <Proyectos />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
