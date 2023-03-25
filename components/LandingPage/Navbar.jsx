import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons'


const Navbar = () => {
  return (
    
    <body className="bg-white dark:bg-gray-900">
    <div className="relative w-full overflow-hidden">
        <header className="absolute top-0 left-0 w-full flex justify-center">
            <nav className="absolute w-full">
                <div className="relative z-30 bg-white dark:bg-gray-900">
                    <div className="container m-auto md:px-12 lg:py-0 lg:px-10">
                        <div className="flex flex-wrap items-center justify-between py-4 gap-6 md:gap-0">
                            <input type="checkbox" name="toggle_nav" id="toggle_nav" className="peer hidden"></input>
                            <div className="w-full px-6 flex justify-between md:w-max md:px-0 z-30">
                                <a href="#" ariaLabel="logo">
                                    <img src="images/logo.svg" className="w-36 dark:hidden" alt="tailus logo" width="144" height="68"></img>
                                    <img src="images/logo-white.svg" className="w-36 hidden dark:block" alt="" width="144" height="68"></img>
                                </a>
                                
                                <div className="flex items-center md:hidden max-h-10">
                                    <label role="button" htmlFor="toggle_nav" ariaLabel="humburger" id="hamburger" className="relative p-2">
                                        <div id="line"
                                            className="m-auto h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"></div>
                                        <div id="line2"
                                            className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300">
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <label htmlFor="toggle_nav" className="hidden peer-checked:block fixed w-full h-full left-0 top-0 z-10 bg-green-200 bg-opacity-30 backdrop-blur backdrop-filter"></label>
                            <div className="hidden z-40 peer-checked:flex w-11/12 mx-auto md:mx-0 flex-col 
                            justify-end items-center gap-y-8 p-6 
                            rounded-xl bg-white dark:bg-gray-800 md:flex md:w-8/12 
                            md:gap-y-0 md:gap-x-4 md:divide-x md:p-0 
                            md:flex-row md:bg-transparent lg:w-7/12">
                                <div className="block w-full md:w-max">
                                    <ul className="gap-y-6 tracking-wide 
                                    text-gray-500 dark:text-gray-300 font-medium flex flex-col md:flex-row md:gap-y-0">
                                        <li>
                                            <a href="#" className="block md:px-4">
                                                <div className="relative text-green-600 dark:text-green-400
                                                            behtmlFore:absolute behtmlFore:-bottom-2 md:behtmlFore:-bottom-7 behtmlFore:w-full behtmlFore:h-1 behtmlFore:mx-auto behtmlFore:mt-auto behtmlFore:rounded-t-full behtmlFore:bg-green-500">
                                                    <span>Home</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block md:px-4 group">
                                                <div className="relative group
                                                            behtmlFore:absolute behtmlFore:-bottom-2 md:behtmlFore:-bottom-7 behtmlFore:w-full behtmlFore:h-0.5 behtmlFore:origin-left behtmlFore:mt-auto behtmlFore:rounded-full behtmlFore:bg-green-800 behtmlFore:transition behtmlFore:scale-x-0 group-hover:behtmlFore:scale-x-100">
                                                    <span className="group-hover:text-green-500">Services</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block md:px-4 group">
                                                <div className="relative group
                                                            behtmlFore:absolute behtmlFore:-bottom-2 md:behtmlFore:-bottom-7 behtmlFore:w-full behtmlFore:h-0.5 behtmlFore:origin-left behtmlFore:mt-auto behtmlFore:rounded-full behtmlFore:bg-green-800 behtmlFore:transition behtmlFore:scale-x-0 group-hover:behtmlFore:scale-x-100">
                                                    <span className="group-hover:text-green-500">About</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block md:px-4 group">
                                                <div className="relative group
                                                            behtmlFore:absolute behtmlFore:-bottom-2 md:behtmlFore:-bottom-7 behtmlFore:w-full behtmlFore:h-0.5 behtmlFore:origin-left behtmlFore:mt-auto behtmlFore:rounded-full behtmlFore:bg-green-800 behtmlFore:transition behtmlFore:scale-x-0 group-hover:behtmlFore:scale-x-100">
                                                    <span className="group-hover:text-green-500">Contact</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="w-full pl-2
                                sm:w-max gap-4 flex min-w-max flex-col sm:flex-row">
                                    <button type="button" title="Start buying" className="w-full py-3 px-3 rounded-xl text-center transition dark:active:bg-green-900 dark:focus:bg-gray-800 active:bg-green-200 focus:bg-green-100 sm:w-max">
                                        <span className="block text-green-600 dark:text-green-500 font-semibold text-lg">
                                            Login
                                        </span>
                                    </button>
                                    <button type="button" title="Start buying" className="w-full py-3 px-3 rounded-xl text-center transition dark:active:bg-green-900 dark:focus:bg-gray-800 active:bg-green-200 focus:bg-green-100 sm:w-max">
                                        <span className="block text-green-600 dark:text-green-500 font-semibold text-lg">
                                            Signup
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div ariaHidden="true" className="container h-4 -mt-6 mx-auto bg-green-600/30 dark:bg-green-900/30 blur md:-mt-4"></div>
            </nav>
        </header>
        <div className="min-h-screen flex dark:from-gray-900 bg-gradient-to-b from-white to-green-50">
            <div className="container m-auto px-6 py-20 md:pb-0 md:pt-40 md:px-12 lg:py-0 lg:px-10">
                <div className="flex flex-wrap gap-12">
                    <div className="lg:w-6/12 lg:pt-32 lg:pb-20">
                        <div className="space-y-8 mt-8 lg:-mr-24 xl:-mr-0">
                            <h1 className="text-4xl text-gray-800 dark:text-white font-bold md:text-5xl lg:leading-tight">Invest with ease</h1>
                            <p className="text-lg text-gray-600 dark:text-gray-300">Where every trade counts: Invest in your future with us.</p>
                            
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a className="bg-green-600 inline-flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 border-2 border-black rounded-full hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 512 512">
                          <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                        </svg>
                        <span className="flex flex-col items-start ml-4 leading-none">
                          <span className="mb-1 text-xs">GET IT ON</span>
                          <span className="font-medium title-font">Google Play</span>
                        </span></a><a className="inline-flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-green-600 border-2 border-black rounded-full hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
                          <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                          <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                        </svg>
                        <span className="flex flex-col items-start ml-4 leading-none">
                          <span className="mb-1 text-xs">Download on the</span>
                          <span className="font-medium title-font">App Store</span>
                        </span>
                      </a>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-700">
                            <h6 className="text-lg text-green-800 dark:text-green-400 font-semibold">Trusted by</h6>
                            <div className="mt-6 flex gap-6">
                                <div className="flex items-center">
                                    <img className="-hue-rotate-30 w-auto h-auto dark:grayscale" src="images/clients/grabyo.png" width="50" height="20" alt="logo partener"></img>
                                </div>

                                <div className="flex items-center">
                                    <img className="-hue-rotate-30 w-auto h-auto dark:grayscale" src="images/clients/lifegroups.png" width="50" height="20" alt="logo partener"></img>
                                </div>
                                <div className="flex items-center">
                                    <img className="-hue-rotate-30 w-auto h-auto dark:grayscale" src="images/clients/lilly.png" width="50" height="20" alt="logo partener"></img>
                                </div>
                                
                                <div className="flex items-center">
                                    <img className="-hue-rotate-30 w-auto h-auto dark:grayscale" src="images/clients/microsoft.png" width="50" height="20" alt="logo partener"></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden bottom-0 md:-right-32 md:block md:w-full md:ml-auto lg:absolute lg:-right-32 lg:w-[60%] xl:-right-48">
                        <img src="images/horse1.png" className="ml-48 lg:ml-0" alt="gril on an horse" loading="lazy" width="1053" height="772"></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </body>
                                      
  )
}

export default Navbar