import { useState } from 'react'
import "../script"
import './App.css'
import Home from './pages/Home/Home'
import NavBar  from './pages/NavBar'
import About from './pages/About/About'
import Skills from './pages/Skills/Skills'
import Why from './pages/Why/Why'
import Service from './pages/Service/Service'
import Proyectos from './pages/Proyectos/Proyectos'
function App() {


  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Why />
      <Service />
      <Proyectos />
    </>
  )
}

export default App
