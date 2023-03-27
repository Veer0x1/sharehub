import React from 'react'
import Feature from '../components/LandingPage/About/Feature';
// import Testimonial2 from '../components/LandingPage/About/Testimonial2';
import Navbar from '../components/Navbar'
import Aboutus from '../components/Aboutus/GetStarted'
import Team from '../components/Aboutus/Team'
import Footer from '../components/Footer'
const about = () => {
  return (
    <>
    <Navbar />
  <Aboutus />
      <Feature />
      <Team />
      <Footer  />
  {/* <Testimonial2 /> */}
  
  </>
  )
}

export default about