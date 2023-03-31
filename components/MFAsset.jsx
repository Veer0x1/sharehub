import React, { useState } from "react";
import InputModalCrypto from "./MFInputModal";

const MFAsset = ({ CryptoData }) => {
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  console.log(CryptoData);
  const [buy, setBuy] = useState(false);
  
  return (
    <>
      <div className="container  p-2 mx-auto sm:p-4 dark:text-white ">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">
          Mutual Funds
        </h2>
        <div>
          <table className="min-w-full text-xs">
            <thead className="bg-gray-900">
              <tr className="text-left">
                <th className="p-3">#</th>
                <th className="p-3">Name</th>
                <th className="p-3">3Y</th>
                <th className="p-3 text-right">SIP Starts From</th>
                <th className="p-3 text-right"></th>
              </tr>
            </thead>
            {CryptoData.map((crypto, index) => {
              return (
                <tr
                  className="border-b border-opacity-20 dark:border-gray-700 "
                  key={crypto.rank}
                >
                  <td className="p-3 ">
                    <p>{index + 1}</p>
                  </td>
                  <td className="p-3">
                    <span>{crypto} </span>
                    <span className="text-bold text-warning">
                      {crypto.symbol}
                    </span>
                  </td>
                  <td className="p-3">
                    <p>12%</p>
                  </td>

                  <td className="p-3 text-right">
                    <p>₹ 1000</p>
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => {
                        setSelectedCrypto(crypto);
                        setIsOpen(true);
                        setBuy(true);
                      }}
                      className="px-3 py-1 font-semibold   rounded-md dark:bg-primary dark:text-gray-900 mr-1 text-black bg-transparent border border-primary hover:bg-transparent hover:border-green hover:text-primary "
                    >
                      Start SIP
                    </button>

                  </td>
                </tr>
              );
            })}
          </table>
          {isOpen && (
              <InputModalCrypto
                IsOpen={isOpen}
                SetIsOpen={setIsOpen}
                Buy={buy}
                SetBuy={setBuy}
                CryptoData={selectedCrypto}
              />
            )}
        </div>
      </div>
    </>
  );
};

export default MFAsset;
