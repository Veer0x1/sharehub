import React from "react";
import Head from "next/head";
import Feature from "./../components/LandingPage/About/Feature";

import Navbar from "../components/Navbar";
import Aboutus from "../components/Aboutus/GetStarted";
import Team from "../components/Aboutus/Team";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Aboutus />
      <Feature />
      <Team />
      <Footer />
    </>
  );
};

export default About;
