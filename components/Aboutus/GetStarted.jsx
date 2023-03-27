import React from 'react'
import Image from '../../assets/hero/logo.png'

const GetStarted = () => {
 
    return (
    <div>
    <div className="py-16">
    <div className="container m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-20 pt-64 pb-44 dark:from-gray-900 bg-gradient-to-b from-white to-green-50 ">
      
      <div className="m-auto space-y-6 md:w-8/12 lg:w-7/12">
        <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">Get Started now</h1>
        <p className="text-center text-xl text-gray-600 dark:text-warning pt-4">
          Be part of millions of people around the world using ShareHub in Finance and Trading.
        </p>
        <div className="flex flex-wrap justify-center gap-6 pt-4">
          <a
              href="#"
              className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-green-600 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-base font-semibold text-white dark:text-dark"
                >Get Started</span >
            </a>
            <a
              href="#"
              className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
            >
              <span
                className="relative text-base font-semibold text-primary dark:text-white"
                >More about</span>
          </a>
        </div>
      </div>
    </div>
            </div>   
            
  </div>                              
  )
}

export default GetStarted