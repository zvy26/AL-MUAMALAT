import React from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Services from './pages/Services'
import Team from './pages/Team'
import Partners from './pages/Partners'
import Media from './pages/Media'
import Testimonial from './pages/Testimonial'
import Questions from './pages/Questions'
import Consultation from './pages/Consultation'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <Team/>
      <Partners/>
      <Media/>
      <Testimonial/>
      <Questions/>
      <Consultation/>
      <Footer/>
    
    </>
  )
}

export default App