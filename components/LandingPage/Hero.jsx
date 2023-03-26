import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import HeroImg from "/Users/apple/Desktop/sharehub/assets/hero/hero_img.png";
import Logo from "/Users/apple/Desktop/sharehub/assets/hero/logo.png";
const Hero = () => {
  return (
        <div className="min-h-screen flex dark:from-gray-900 bg-gradient-to-b from-white to-green-50">
          <div className="container m-auto px-6 py-20 md:pb-0 md:pt-40 md:px-12 lg:py-0 lg:px-10">
            <div className="flex flex-wrap gap-12">
              <div className="lg:w-6/12 lg:pt-32 lg:pb-20">
                <div className="space-y-8 mt-8 lg:-mr-24 xl:-mr-0">
                  <h1 className="text-4xl text-gray-800 dark:text-white font-bold md:text-5xl lg:leading-tight">
                    Invest with ease
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Where every trade counts: Invest in your future with us.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      className="bg-green-600 inline-flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 border-2  rounded-full hover:text-green-600 hover:border-green-600 hover:bg-transparent dark:border-green-600 focus:outline-none lg:w-auto"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-6 h-6"
                        viewBox="0 0 512 512"
                      >
                        <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                      </svg>
                      <span className="flex flex-col items-start ml-4 leading-none">
                        <span className="mb-1 text-xs">GET IT ON</span>
                        <span className="font-medium title-font">
                          Google Play
                        </span>
                      </span>
                    </a>
                    <a
                      className="inline-flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-green-600 border-2  rounded-full hover:bg-transparent hover:border-green-600 dark:border-green-600 hover:text-green-600  focus:outline-none lg:w-auto"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-6 h-6"
                        viewBox="0 0 305 305"
                      >
                        <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                        <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                      </svg>
                      <span className="flex flex-col items-start ml-4 leading-none">
                        <span className="mb-1 text-xs">Download on the</span>
                        <span className="font-medium title-font">
                          App Store
                        </span>
                      </span>
                    </a>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-700">
                  <h6 className="text-lg text-green-800 dark:text-green-400 font-semibold">
                    Supported in
                  </h6>
                  <div className="mt-6 flex gap-6">
                    <div className="flex items-center">
                      <img src="https://img.icons8.com/color/96/null/india.png" />
                    </div>

                    <div className="flex items-center">
                      <img src="https://img.icons8.com/color/96/null/usa.png" />
                    </div>
                    <div className="flex items-center">
                      <img src="https://img.icons8.com/color/96/null/ukraine.png" />
                    </div>

                    <div className="flex items-center">
                      <img src="https://img.icons8.com/fluency/96/null/brazil.png" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block lg:mt-52 xl:mt-24">
                <Image
                  src={HeroImg}
                  className="ml-48 lg:ml-0 bg-contain  border-rounded lg:h-[400px] lg:w-[400px] xl:h-[550px] xl:w-[550px]"
                  alt="gril on an horse"
                  loading="lazy"
                 
                />
              </div>
            </div>
          </div>
        </div>
  )
}

export default Hero