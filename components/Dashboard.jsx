import React,{useState} from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.png";
import StocksPortfolio from "./dashboard/StocksPortfolio";
import CryptoPortfolio from "./dashboard/CryptoPortfolio";
import MutualFundsPortfolio from "./dashboard/MutualFundsPortfolio";

import { useRouter } from "next/router";

import { UserAuth } from "../context/AuthContext";
import Account from './dashboard/Account';
import Sidebar from './dashboard/Sidebar';

const Dashboard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  // const router = useRouter();
  // const { handleGoogleSignIn, logout, user, isLoggedIn } = UserAuth();

  
  const selectedClassName="relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-green-800 to-green-400 px-4 py-3 text-white";
  const unSelectedClassName="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
  const className = isHovered ? selectedClassName : unSelectedClassName;
  return (
    <section className="bg-gray-100 dark:bg-black">
      <aside className="fixed top-0 z-10 dark:bg-black ml-[-100%] flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]  dark:border-gray-700">
        <Sidebar/>
      </aside>
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="sticky top-0 h-16 border-b bg-white dark:bg-black dark:border-gray-700 lg:py-2.5">
          <div className="flex items-center justify-between space-x-4 px-6 2xl:container">
            <h5
              hidden
              className="text-2xl font-medium text-gray-600 lg:block dark:text-white"
            >
              Dashboard
            </h5>
            <button className="-mr-2 h-16 w-12 border-r lg:hidden dark:border-gray-700 dark:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="my-auto h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div className="flex space-x-4">
              <div hidden className="md:block">
                <div className="relative flex items-center text-gray-400 focus-within:text-green-400">
                  <span className="absolute left-4 flex h-6 items-center border-r border-green-300 pr-3 dark:border-gray-700">
                    <svg
                      xmlns="http://ww50w3.org/2000/svg"
                      className="w-4 fill-current"
                      viewBox="0 0 35.997 36.004"
                    >
                      <path
                        id="Icon_awesome-search"
                        // dataName="search"
                        d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                      ></path>
                    </svg>
                  </span>
                  <input
                    type="search"
                    name="leadingIcon"
                    id="leadingIcon"
                    placeholder="Search here"
                    className="outline-none w-full rounded-xl border border-gray-300 py-2.5 pl-14 pr-4 text-sm dark:text-white text-black transition focus:border-green-400 dark:bg-gray-900 dark:border-gray-700"
                  />
                </div>
              </div>

              <button
                ariaLabel="search"
                className="h-10 w-10 rounded-xl border bg-gray-100 active:bg-gray-200 md:hidden dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto w-4 fill-current text-gray-600 dark:text-gray-300"
                  viewBox="0 0 35.997 36.004"
                >
                  <path
                    id="Icon_awesome-search"
                    // dataName="search"
                    d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <Account />
        <StocksPortfolio />
        <CryptoPortfolio />
        <MutualFundsPortfolio />
      </div>
    </section>
  );
};

export default Dashboard;
