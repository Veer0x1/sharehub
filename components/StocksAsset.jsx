import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { db } from "../utility/firebase.js";


import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import InputModal from "./InputModal";

const StocksAsset = ({ StocksData }) => {

  const [selectedStock, setSelectedStock] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const [buy, setBuy] = useState(false);
  const [sell, setSell] = useState(false);

  const buyHandler = () => {
    toast("Here is your toast.");
  };

  if (StocksData) {
    return (
      <div>
        <div className="container p-2 mx-auto sm:p-4 dark:text-white ">
          <h2 className="mb-4 text-2xl font-semibold leading-tight">Stocks</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full  text-xs">
              <thead className="dark:bg-gray-900 bg-gray-200">
                <tr className="text-left">
                  <th className="p-3">#</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">24h%</th>
                  <th className="p-3 text-right">Price</th>
                  <th className="p-3 text-right"></th>
                </tr>
              </thead>
              <tbody>
                {StocksData.slice(1).map((stock, index) => {
                  return (
                    <tr
                      className="border-b border-opacity-20 dark:border-gray-700 "
                      key={index}
                    >
                      <td className="p-3 ">
                        <p>{index + 1}</p>
                      </td>
                      <td className="p-3">
                        <span>{stock.symbol} </span>
                        <span className="text-bold text-warning">
                          {stock.identifier}
                        </span>
                      </td>
                      <td className="p-3">
                        <p
                          style={{
                            color: stock.pChange >= 0 ? "#17c964" : "red",
                          }}
                        >
                          {stock.pChange}
                        </p>
                      </td>

                      <td className="p-3 text-right">
                        <p>{stock.open}</p>
                      </td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => {
                            setSelectedStock(stock);
                            setIsOpen(true);
                            setSell(false);
                            setBuy(true);
                          }}
                          className="px-3 py-1 font-semibold   rounded-md dark:bg-primary dark:text-gray-900 mr-1 text-black bg-transparent border border-primary hover:bg-transparent hover:border-green hover:text-primary "
                        >
                          Buy
                        </button>

                        <button
                          onClick={() => {
                            setSelectedStock(stock);
                            setIsOpen(true);
                            setBuy(false);
                            setSell(true);
                          }}
                          className="px-3 py-1 font-semibold rounded-md dark:bg-error dark:text-white bg-transparent border border-error hover:bg-transparent hover:border-error hover:text-error"
                        >
                          Sell
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {isOpen && (
              <InputModal
                IsOpen={isOpen}
                SetIsOpen={setIsOpen}
                Buy={buy}
                SetBuy={setBuy}
                Sell={sell}
                SetSell={setSell}
                StockData={selectedStock}
              />
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Loading Data...</h1>;
  }
};

export default StocksAsset;
