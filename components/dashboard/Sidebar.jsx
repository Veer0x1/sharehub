import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Logo from "../../assets/logo.png";

import { UserAuth } from "../../context/AuthContext";

const Sidebar = () => {
  const router = useRouter();
  const { handleGoogleSignIn, logout, user, isLoggedIn } = UserAuth();

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const selectedClassName =
    "relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-green-800 to-green-400 px-4 py-3 text-white";
  const unSelectedClassName =
    "group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300";
  const className = isHovered ? selectedClassName : unSelectedClassName;

  if (user) {
    return (
      <>
        <div>
          <div className="-mx-6 px-6 py-4">
            <Link href="/" title="home">
              <Image src={Logo} className="w-32" alt="tailus logo" />
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Image
              src={user.photoURL}
              alt=""
              className="m-auto h-10 w-10 rounded-full object-cover lg:h-28 lg:w-28"
              height={200}
              width={200}
            />

            <h5 className="mt-4 hidden text-xl font-semibold text-gray-600 lg:block dark:text-gray-300">
              {user.displayName}
            </h5>
            <span className="hidden text-gray-400 lg:block">Admin</span>
          </div>

          <ul className="mt-8 space-y-2 tracking-wide">
            <li>
              <Link
                href="#"
                aria-label="account"
                className={className}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                // className="relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-green-800 to-green-400 px-4 py-3 text-white"
              >
                <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                    className="dark:fill-slate-600 fill-current text-cyan-400"
                  ></path>
                  <path
                    d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                    className="fill-current text-cyan-200 group-hover:text-cyan-300"
                  ></path>
                  <path
                    d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                    className="fill-current group-hover:text-sky-300"
                  ></path>
                </svg>
                <span className="-mr-1 font-medium">Account</span>
              </Link>
            </li>
            <li>
              <Link
                href="/stocks"
                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
              >
                <Image
                  src="https://img.icons8.com/fluency/96/null/stocks-growth.png"
                  className="h-5"
                  alt="stocks icon"
                  width={25}
                  height={25}
                />

                <span  className="group-hover:text-green-600 dark:group-hover:text-green-600">
                  Stocks
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/bonds"
                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
              >
                <Image
                  src="https://img.icons8.com/fluency/96/null/bonds.png"
                  className="h-5"
                  alt=""
                  width={25}
                  height={25}
                />

                <span className="group-hover:text-green-500 dark:group-hover:text-green-500">
                  Bonds
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/crypto"
                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
              >
                <Image
                  src="https://img.icons8.com/fluency/96/null/bitcoin-cryptocurrency.png"
                  className="h-5"
                  alt=""
                  width={25}
                  height={25}
                />
                <span className="group-hover:text-green-500 dark:group-hover:text-green-500">
                  Crypto
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="mutual-funds"
                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
              >
                <Image
                  src="https://img.icons8.com/color/96/null/cash.png"
                  className="h-5"
                  alt=""
                  width={25}
                  height={25}
                />
                <span className="group-hover:text-green-500 dark:group-hover:text-green-500">
                  Mutual Funds
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="-mx-6 flex items-center justify-between border-t px-6 pt-4 dark:border-gray-700">
          <button
            onClick={() => {
              logout();
            }}
            className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span className="group-hover:text-gray-700 dark:group-hover:text-white">
              Logout
            </span>
          </button>
        </div>
      </>
    );
  }else{
    return <p>Loading...</p>
  }
};

export default Sidebar;
