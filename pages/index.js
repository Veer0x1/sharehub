import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Hero from "../components/LandingPage/Hero.jsx";
import GetStarted from "../components/LandingPage/GetStarted";
import Footer from "../components/Footer";
import FAQs from "./../components/LandingPage/FAQs";
import Stats from "./../components/LandingPage/Stats";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>ShareHub</title>
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
