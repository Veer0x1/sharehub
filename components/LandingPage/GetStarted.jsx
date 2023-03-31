import Link from "next/link";
import Image from "next/image";

const GetStarted = () => {
  return (
    <section id="features" className="relative flex items-center w-full bg-green-50 dark:bg-black">
      <div className="relative items-center w-full px-5 mx-auto md:px-12 lg:px-0 max-w-7xl">
        <div className="relative flex-col items-start m-auto align-middle">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
            <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
              <div className="max-w-xl space-y-12 text-center lg:text-left">
                <div className=" items-center justify-center gap-3 mt-10">
                  <div className="m-4">
                    <h2 className="mt-4 mb-6 text-2xl font-semibold text-gray-800 dark:text-white md:text-4xl">
                      What are you waiting for?
                    </h2>
                    <p className="mb-9">
                      Are you ready to begin your journey in the exciting world
                      of trading stocks? With our user-friendly platform, you
                      can easily buy and sell stocks, track your portfolio, and
                      stay informed about the latest market trends.
                    </p>
                  </div>
                  <Link
                    href="/register"
                    className="items-center ml-4 font-light justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-green-600 border-2 border-green-600 rounded-full nline-flex hover:bg-transparent hover:border-green-600 hover:text-green-600 dark:hover:text-white focus:outline-none lg:w-auto focus-visible:outline-black text-2xl focus-visible:ring-black"
                  >
                    Get started
                  </Link>
                  <a
                    href="#"
                    className="mt-2 ml-4 items-center justify-center pl-1 md:pl-0 lg:pl-10 text-sm font-semibold text-black duration-200 hover:text-green-600 focus:outline-none focus-visible:outline-gray-600 dark:text-white"
                  >
                    Learn more <span aria-hidden="true"> → </span>
                  </a>
                </div>
                <div className="flex justify-center gap-3 mt-10 lg:justify-start">
                  <a
                    className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                    href="#"
                  >
                    <ion-icon
                      className="flex-none w-3 h-3 ml-3 fill-blue-600 group-active:fill-current md hydrated"
                      name="arrow-forward-outline"
                      role="img"
                      ariaLabel="arrow forward outline"
                    ></ion-icon>
                  </a>{" "}
                </div>
              </div>
            </div>
            <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
              <div className="py-16">
                <div className="m-auto space-y-12 px-6 xl:container md:px-12 lg:px-20">
                  <div className="mt-16 grid gap-8 sm:mx-auto sm:w-2/3 md:-mx-8 md:w-full md:grid-cols-2">
                    <div className="rounded-3xl border border-gray-100 bg-white bg-opacity-50 p-8 py-12 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12">
                      <div className="space-y-6 text-center">
                        {/* <img
                          src="https://cdn-icons-png.flaticon.com/512/4341/4341069.png"
                          class="mx-auto w-16"
                          width="512"
                          height="512"
                          alt="burger illustration"
                        /> */}
                        {/* <img src="https://img.icons8.com/material-rounded/96/null/stocks-growth.png"/> */}
                        <Image
                          alt=""
                          src="https://img.icons8.com/fluency/96/null/stocks-growth.png"
                          height={400}
                          width={400}
                        />
                        <div className="space-y-6">
                          <h3 className="text-lg font-semibold text-gray-800 transition dark:text-white">
                            Stocks
                          </h3>
                          <Link
                            href="/stocks"
                            className="group relative mx-auto flex h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="relative h-5 w-5 text-gray-600 transition duration-300 group-hover:translate-x-1 dark:text-white"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-3xl border border-gray-100 bg-white bg-opacity-50 p-8 py-12 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12">
                      <div className="space-y-6 text-center">
                        <Image
                          src="https://img.icons8.com/fluency/96/null/bonds.png"
                          alt="bonds"
                          height={400}
                          width={400}
                        />
                        <div className="space-y-6">
                          <h3 className="text-lg font-semibold text-gray-800 transition dark:text-white">
                            Bonds
                          </h3>
                          <Link
                            href="/bonds"
                            className="group relative mx-auto flex h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="relative h-5 w-5 text-gray-600 transition duration-300 group-hover:translate-x-1 dark:text-white"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-3xl border border-gray-100 bg-white bg-opacity-50 p-8 py-12 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12">
                      <div className="space-y-6 text-center">
                        <Image
                          alt=""
                          src="https://img.icons8.com/fluency/96/null/bitcoin-cryptocurrency.png"
                          height={400}
                          width={400}
                        />
                        <div className="space-y-6 lg:space-y-12">
                          <h3 className="text-lg font-semibold text-gray-800 transition dark:text-white">
                            Crypto
                          </h3>
                          <Link
                            href="/crypto"
                            className="group relative mx-auto flex h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="relative h-5 w-5 text-gray-600 transition duration-300 group-hover:translate-x-1 dark:text-white"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-3xl border border-gray-100 bg-white bg-opacity-50 p-8 py-12 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12">
                      <div className="space-y-6 text-center">
                        <Image
                          alt=""
                          src="https://img.icons8.com/color/96/null/cash.png"
                          height={400}
                          width={400}
                        />
                        <div className="space-y-6">
                          <h3 className="text-lg font-semibold text-gray-800 transition dark:text-white">
                            Mutual Funds
                          </h3>
                          <Link
                            href="mutual-funds"
                            className="group relative mx-auto flex h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="relative h-5 w-5 text-gray-600 transition duration-300 group-hover:translate-x-1 dark:text-white"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      </section>                                
  );
};

export default GetStarted;

// import Link from "next/link";
// import Image from "next/image";
// const GetStarted = () => {
//   return (
//     <section className="  relative flex items-center w-full bg-green-50 dark:bg-black">
//       <div className="relative items-center w-full px-5 mx-auto md:px-12 lg:px-0 max-w-7xl">
//         <div className="relative flex-col items-start m-auto align-middle">
//           <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
//             <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
//               <div className="max-w-xl space-y-12 text-center lg:text-left">
//                 <div className=" items-center justify-center gap-3 mt-10">
//                   <div className="m-4">
//                     <h2 className="mt-4 mb-6 text-2xl font-semibold text-gray-800 dark:text-white md:text-4xl">
//                       What are you waiting for?
//                     </h2>
//                     <p className="mb-9">
//                       Are you ready to begin your journey in the exciting world
//                       of trading stocks? With our user-friendly platform, you
//                       can easily buy and sell stocks, track your portfolio, and
//                       stay informed about the latest market trends.
//                     </p>
//                   </div>
//                   <Link
//                     href="/register"
//                     className="items-center ml-4 font-light justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-green-600 border-2 border-green-600 rounded-full nline-flex hover:bg-transparent hover:border-green-600 hover:text-green-600 dark:hover:text-white focus:outline-none lg:w-auto focus-visible:outline-black text-2xl focus-visible:ring-black"
//                   >
//                     Get started
//                   </Link>
//                   <a
//                     href="#"
//                     className="mt-2 ml-4 items-center justify-center pl-1 md:pl-0 lg:pl-10 text-sm font-semibold text-black duration-200 hover:text-green-600 focus:outline-none focus-visible:outline-gray-600 dark:text-white"
//                   >
//                     Learn more <span aria-hidden="true"> → </span>
//                   </a>
//                 </div>
//                 <div className="flex justify-center gap-3 mt-10 lg:justify-start">
//                   <a
//                     className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
//                     href="#"
//                   >
//                     <ion-icon
//                       className="flex-none w-3 h-3 ml-3 fill-blue-600 group-active:fill-current md hydrated"
//                       name="arrow-forward-outline"
//                       role="img"
//                       ariaLabel="arrow forward outline"
//                     ></ion-icon>
//                   </a>{" "}
//                 </div>
//               </div>
//             </div>
//             <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
//               <div className="py-16">
//                 <div className="m-auto space-y-12 px-6 xl:container md:px-12 lg:px-20">
//                   <div className="mt-16 grid gap-8 sm:mx-auto sm:w-2/3 md:-mx-8 md:w-full md:grid-cols-2">
//                     <div className="rounded-3xl border border-gray-100 bg-white bg-opacity-50 p-8 py-12 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12">
//                       <div className="space-y-6 text-center">
                        
//                         <div className="space-y-6">
//                           <h3 className="text-lg font-semibold text-gray-800 transition dark:text-white">
//                             Stocks
//                           </h3>
//                           <Link
//                             href="/stocks"
//                             className="group relative mx-auto flex h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800"
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               viewBox="0 0 24 24"
//                               fill="currentColor"
//                               className="relative h-5 w-5 text-gray-600 transition duration-300 group-hover:translate-x-1 dark:text-white"
//                             >
//                               <path
//                                 fillRule="evenodd"
//                                 d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
//                                 clipRule="evenodd"
//                               />
//                             </svg>
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="rounded-3xl border border-gray-100 bg-white bg-opacity-50 p-8 py-12 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12">
//                       <div className="space-y-6 text-center">
                        
//                         <div className="space-y-6">
//                           <h3 className="text-lg font-semibold text-gray-800 transition dark:text-white">
//                             Bonds
//                           </h3>
//                           <Link
//                             href="/bonds"
//                             className="group relative mx-auto flex h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800"
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               viewBox="0 0 24 24"
//                               fill="currentColor"
//                               className="relative h-5 w-5 text-gray-600 transition duration-300 group-hover:translate-x-1 dark:text-white"
//                             >
//                               <path
//                                 fillRule="evenodd"
//                                 d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
//                                 clipRule="evenodd"
//                               />
//                             </svg>
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="rounded-3xl border border-gray-100 bg-white bg-opacity-50 p-8 py-12 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12">
//                       <div className="space-y-6 text-center">
                        
//                         <div className="space-y-6 lg:space-y-12">
//                           <h3 className="text-lg font-semibold text-gray-800 transition dark:text-white">
//                             Crypto
//                           </h3>
//                           <Link
//                             href="/crypto"
//                             className="group relative mx-auto flex h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800"
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               viewBox="0 0 24 24"
//                               fill="currentColor"
//                               className="relative h-5 w-5 text-gray-600 transition duration-300 group-hover:translate-x-1 dark:text-white"
//                             >
//                               <path
//                                 fillRule="evenodd"
//                                 d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
//                                 clipRule="evenodd"
//                               />
//                             </svg>
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="rounded-3xl border border-gray-100 bg-white bg-opacity-50 p-8 py-12 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12">
//                       <div className="space-y-6 text-center">
                        
//                         <div className="space-y-6">
//                           <h3 className="text-lg font-semibold text-gray-800 transition dark:text-white">
//                             Mutual Funds
//                           </h3>
//                           <Link
//                             href="mutual-funds"
//                             className="group relative mx-auto flex h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800"
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               viewBox="0 0 24 24"
//                               fill="currentColor"
//                               className="relative h-5 w-5 text-gray-600 transition duration-300 group-hover:translate-x-1 dark:text-white"
//                             >
//                               <path
//                                 fillRule="evenodd"
//                                 d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
//                                 clipRule="evenodd"
//                               />
//                             </svg>
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GetStarted;