import React from "react";
import Feature from "./../components/LandingPage/About/Feature";

import Navbar from "../components/Navbar";
import Aboutus from "../components/Aboutus/GetStarted";
import Team from "../components/Aboutus/Team";
import Footer from "../components/Footer";

const about = () => {
  return (
    <>
      <Navbar />
      <Aboutus />
      <Feature />
      <Team />
      <Footer />
    </>
  );
};

export default About;
