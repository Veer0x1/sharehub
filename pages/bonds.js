import React from "react";
import Link from 'next/link';

const Bonds = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Coming Soon</h1>
      <Link href="/" legacyBehavior>
        <a className="bg-green-700 hover:bg-green-900 text-gray-200 font-bold py-2 px-4 rounded-md transition-colors duration-300 shadow-md hover:shadow-lg">
           Home
        </a>
      </Link>
     
    </div>
  );
};

export default Bonds;
