import React, { useState } from "react";
import InputModalCrypto from "./InputModalCrypto";


const AssetPage = ({ CryptoData }) => {
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const [buy, setBuy] = useState(false);
  const [sell, setSell] = useState(false);
  if (CryptoData) {
    return (
      <>
      <div>
        <div className="container  p-2 mx-auto sm:p-4 dark:text-white ">
          <h2 className="mb-4 text-2xl font-semibold leading-tight mt-20">Crypto</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <thead className="bg-gray-900">
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
                      className="border-b border-opacity-20 dark:border-gray-700 "
                      key={crypto.rank}
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
                        <p style={{
                            color: crypto.change >= 0 ? "green" : "red",
                          }}>
                          {crypto.change}
                        </p>
                        
                      </td>

                      <td className="p-3 text-right">
                        
                        <p>{parseFloat(crypto.price*80).toFixed(2)}</p>
                      </td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => {
                            setSelectedCrypto(crypto);
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
                            setSelectedCrypto(crypto);
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
              <InputModalCrypto
                IsOpen={isOpen}
                SetIsOpen={setIsOpen}
                Buy={buy}
                SetBuy={setBuy}
                Sell={sell}
                SetSell={setSell}
                CryptoData={selectedCrypto}
              />
            )}
          </div>
        </div>
      </div>
      </>
    );
  } else {
    return <h1>Loading Data...</h1>;
  }
};

export default AssetPage;
