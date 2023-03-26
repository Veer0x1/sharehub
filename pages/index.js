import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from '../components/Navbar';
import Hero from '../components/LandingPage/Hero.jsx'
import GetStarted from '../components/LandingPage/GetStarted'
import Footer from '../components/Footer'
import FAQs from './../components/LandingPage/FAQs';
import Stats from './../components/LandingPage/Stats';
import AboutUs from './../components/LandingPage/AboutUs';
import Login from '@/components/Login'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
    <GetStarted />
      <Stats />
      <FAQs />
      <Footer />
     
   
    </>
  );
}
