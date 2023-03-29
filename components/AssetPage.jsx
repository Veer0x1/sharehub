import React, { useState } from "react";

const AssetPage = ({ CryptoData }) => {
  const [isOpen, setIsOpen] = useState(false);
  if (CryptoData) {
    return (
      <div>
        <div className="container p-2 mx-auto sm:p-4 dark:text-white">
          <h2 className="mb-4 text-2xl font-semibold leading-tight">Stocks</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <thead className="dark:bg-gradient-to-r from-gray-900 to-gray-600">
                <tr className="text-left">
                  <th className="p-3">#</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">24h%</th>
                  <th className="p-3 text-right">Price</th>
                  <th className="p-3 text-right"></th>
                </tr>
              </thead>
              <tbody>
                {CryptoData.map((crypto) => {
                  return (
                    <tr
                      className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gradient-to-r from-green-700 to-green-1000"
                      key={crypto.id}
                    >
                      <td className="p-3 ">
                        <p>{crypto.rank}</p>
                      </td>
                      <td className="p-3">
                        <span>{crypto.name} </span>
                        <span className="text-bold text-warning">
                          {crypto.symbol}
                        </span>
                      </td>
                      <td className="p-3">
                        <p>
                          {new Date().toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                        <p className="dark:text-gray-400">
                          {new Date().toLocaleDateString("en-US", {
                            weekday: "long",
                          })}
                        </p>
                      </td>

                      <td className="p-3 text-right">
                        <p>$15,792</p>
                      </td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => setIsOpen(true)}
                          className="px-3 py-1 font-semibold rounded-md dark:bg-warning dark:text-gray-900 mr-1 text-primary bg-transparent border border-warning hover:bg-transparent hover:border-warning hover:text-white "
                        >
                          Buy
                        </button>
                        {isOpen && (
                          <div
                            className="fixed inset-0 z-10 overflow-y-auto"
                            aria-labelledby="modal-title"
                            role="dialog"
                            aria-modal="true"
                          >
                            <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                              <span
                                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                                aria-hidden="true"
                              >
                                &#8203;
                              </span>

                              <div className="relative inline-block p-4 overflow-hidden text-left align-middle transition-all transform bg-white sm:max-w-sm rounded-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:p-6">
                                <div className="mt-5 text-center">
                                  <h3
                                    className="text-lg font-medium text-gray-800 dark:text-white"
                                    id="modal-title"
                                  >
                                    Quantity
                                  </h3>
                                </div>

                                <div className="flex items-center justify-between w-full mt-5 gap-x-2">
                                  <input
                                    type="number"
                                    value="https://merakiui.com/project"
                                    className="flex-1 block h-10 px-4 text-sm text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                  />
                                </div>

                                <div className="mt-4 sm:flex sm:items-center sm:justify-between sm:mt-6 sm:-mx-2">
                                  <button
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 sm:mx-2 w-full py-2.5 text-sm font-medium dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                                  >
                                    Cancel
                                  </button>

                                  <button className="px-4 sm:mx-2 w-full py-2.5 mt-3 sm:mt-0 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                                    Confirm
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        <button
                          onClick={() => setIsOpen(true)}
                          className="px-3 py-1 font-semibold rounded-md dark:bg-error dark:text-white bg-transparent border border-error hover:bg-transparent hover:border-error hover:text-white"
                        >
                          Sell
                        </button>
                        {isOpen && (
                          <div
                            className="fixed inset-0 z-10 overflow-y-auto"
                            aria-labelledby="modal-title"
                            role="dialog"
                            aria-modal="true"
                          >
                            <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                              <span
                                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                                aria-hidden="true"
                              >
                                &#8203;
                              </span>

                              <div className="relative inline-block p-4 overflow-hidden text-left align-middle transition-all transform bg-white sm:max-w-sm rounded-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:p-6">
                                <div className="mt-5 text-center">
                                  <h3
                                    className="text-lg font-medium text-gray-800 dark:text-white"
                                    id="modal-title"
                                  >
                                    Quantity
                                  </h3>
                                </div>

                                <div className="flex items-center justify-between w-full mt-5 gap-x-2">
                                  <input
                                    type="number"
                                    value="https://merakiui.com/project"
                                    className="flex-1 block h-10 px-4 text-sm text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                  />
                                </div>

                                <div className="mt-4 sm:flex sm:items-center sm:justify-between sm:mt-6 sm:-mx-2">
                                  <button
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 sm:mx-2 w-full py-2.5 text-sm font-medium dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                                  >
                                    Cancel
                                  </button>

                                  <button className="px-4 sm:mx-2 w-full py-2.5 mt-3 sm:mt-0 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                                    Confirm
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Loading Data...</h1>;
  }
};

export default AssetPage;
