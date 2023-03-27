import React from 'react'
import Image from 'next/image'
import Pranshu from '../../public/Pranshu.jpeg'
import Prazzwal from '../../public/Prazzwal.jpeg'
import Balveer from '../../public/Balveer.jpeg'
const Team = () => {
  return (
    
    <div className="py-20">
    <div className="container mx-auto px-6 text-center md:px-12">
      <div className="mb-16">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
          Our Team Members
        </h2>
        
      </div>
      <div className="grid gap-28 py-20 md:grid-cols-3 md:gap-12">
        <div className="group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
          <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
            <Image
              className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
              src={Balveer}
              alt="woman"
              loading="lazy"
              width="640"
              height="805"
            />
          </div>
          <div className="space-y-4 text-center">
            <div>
              <h4 className="text-2xl text-gray-700 dark:text-white">Balveer Singh Rao</h4>
            </div>
          </div>
        </div>
  
        <div className="group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
          <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
            <Image
              className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
              src={Pranshu}
              alt="woman"
              loading="lazy"
              width="1000"
              height="667"
            />
          </div>
          <div className="space-y-4 text-center">
            <div>
              <h4 className="text-2xl text-gray-700 dark:text-white">Pranshu Kedia</h4>
            </div>
          </div>
        </div>
  
        <div className="group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
          <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
            <Image
              className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
              src={Prazzwal}
              alt="man"
              loading="lazy"
              width="1000"
              height="667"
            />
          </div>
          <div className="space-y-4 text-center">
            <div>
              <h4 className="text-2xl text-gray-700 dark:text-white">Prazzwal Anand</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
                                      
  )
}

export default Team