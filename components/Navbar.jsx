import React from "react";
import Logo from "../assets/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";

import { UserAuth } from "../context/AuthContext";
import Link from "next/link";

const Navbar = () => {
  let router = useRouter();
  const { logout, user } = UserAuth();
  const handleSignIn = () => {
    router.push("/register");
  };
  const handleLogout = () => {
    logout();
    router.push("/");
  };
  const handleProfileClick = () => {
    router.push("/dashboard");
    // logout();
  };
  return (
    <header>
      <input
        type="checkbox"
        name="hbr"
        id="hbr"
        className="hbr peer"
        hidden
        aria-hidden="true"
      />
      <nav className="fixed w-full top-0 z-50 bg-white/90 dark:bg-gray-900/80 backdrop-blur navbar shadow-2xl shadow-gray-600/5 border-b border-gray-100 dark:border-gray-800 peer-checked:navbar-active dark:shadow-none">
        <div className="xl:container m-auto px-6 md:px-12 lg:px-6">
          <div className="flex flex-wrap items-center justify-between gap-6  md:gap-0 ">
            <div className="w-full items-center flex justify-between lg:w-auto">
              <Link className="relative z-50" href="/" aria-label="logo">
                <Image
                  src={Logo}
                  className="bg-cover h-auto w-auto"
                  width={100}
                  alt="logo"
                />
              </Link>
              {/* <div className="flex">
                  
                  <button onClick={handleProfileClick}>
                    <Image
                      className="w-8 h-8  rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                      src={user.photoURL}
                      alt="Bordered avatar"
                      width={400}
                      height={400}
                    />
                  </button>
                </div> */}
              <label
                htmlFor="hbr"
                className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
              >
                <div
                  aria-hidden="true"
                  className="m-auto h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  className="m-auto mt-2 h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
                ></div>
              </label>
            </div>
            <div className="navmenu hidden w-full flex-wrap justify-end  items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
              <div className="text-gray-600 dark:text-gray-300  lg:pr-4">
                <ul className="space-y-6 tracking-wide font-medium text-base  lg:text-sm lg:flex lg:space-y-0 items-center">
                  <li>
                    <Link
                      href="/"
                      className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                    >
                      <span>Home</span>
                    </Link>
                  </li>
                  {user ? (
                    <li>
                      <Link
                        href="/dashboard"
                        className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                      >
                        <span>Portfolio</span>
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}

                  <li>
                    <Link
                      href=""
                      className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                    >
                      <span>Services</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                    >
                      <span>About</span>
                    </Link>
                  </li>
                  <div className="w-full space-y-2 border-primary/10 dark:border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                    <Link
                      href="/register"
                      className={`relative flex h-9 ml-3 items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95`}
                    >
                      <button
                        onClick={user ? handleLogout : handleSignIn}
                        className="relative text-sm font-semibold text-white dark:text-gray-900"
                      >
                        {user ? "Logout" : " Login"}
                      </button>
                    </Link>
                  </div>
                </ul>
              </div>
              {user ? (
                <div className="flex">
                  <h2 className="block md:px-4  transition mt-1 text-error dark:text-warning dark:hover:text-primaryLight">
                    {user.displayName.substring(
                      0,
                      user.displayName.indexOf(" ")
                    )}
                  </h2>
                  <button onClick={handleProfileClick}>
                    <Image
                      className="w-8 h-8  rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                      src={user.photoURL}
                      alt="Bordered avatar"
                      width={400}
                      height={400}
                    />
                  </button>
                </div>
              ) : (
                // <div className="w-full space-y-2 border-primary/10 dark:border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                //   <Link
                //     href="/register"
                //     className={`relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95`}
                //   >
                //     <button
                //       onClick={handleSignIn}
                //       className="relative text-sm font-semibold text-white dark:text-gray-900"
                //     >
                //       {user ? "Logout" : " Login"}
                //     </button>
                //   </Link>
                // </div>
                ""
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
