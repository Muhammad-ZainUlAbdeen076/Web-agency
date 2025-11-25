import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import  ServicesSection  from './components/ServicesSection'
import Process from './components/Process'
import Connect from './components/Connect'
import TestimonialsStats from './components/TestimonialsStats'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Team from './components/Team'
import Pricing from './components/Pricing'
import Portfolio from './components/Portfolio'


function App() {
  
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <ServicesSection/>
    <Pricing/>
    <Process/>
    <Connect/>
    <Portfolio/>
    <TestimonialsStats/>
    <Team/>
    <ContactSection/>
    <Footer/>
    </>
  )
}

export default App
