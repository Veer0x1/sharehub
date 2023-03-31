import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { db } from "../utility/firebase.js";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";

const InputModalCrypto = ({ IsOpen, SetIsOpen, Buy, SetBuy, CryptoData }) => {
  const [quantity, setQuantity] = useState(null);

  const { user } = UserAuth();

  const handleClick = async () => {
    if (user) {
      if (Buy) {
        const docRef = doc(db, "user", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          let updatedCryptos;
          const existingCryptoIndex = docSnap
            .data()
            .MutualFunds.findIndex((obj) => obj.name === CryptoData);

          if (existingCryptoIndex !== -1) {
            // Update the existing stock object
            const existingCrypto =
              docSnap.data().MutualFunds[existingCryptoIndex];
            const updatedCrypto = {
              ...existingCrypto,
              quantity: Number(existingCrypto.quantity) + Number(quantity),
            };
            updatedCryptos = [
              ...docSnap.data().MutualFunds.slice(0, existingCryptoIndex),
              updatedCrypto,
              ...docSnap.data().MutualFunds.slice(existingCryptoIndex + 1),
            ];
          } else {
            // Add a new stock object
            updatedCryptos = [
              ...docSnap.data().MutualFunds,
              {
                name: String(CryptoData),
                quantity: Number(quantity),
              },
            ];
          }

          setDoc(docRef, {
            ...docSnap.data(),
            MutualFunds: updatedCryptos,
            balance: Number(docSnap.data().balance - quantity),
            investedValue: Number(docSnap.data().investedValue + quantity), // Set balance as number
          });

          toast.success("Bought Successfully");
          SetIsOpen(false);
          SetBuy(false);
        }
      }
    } else {
      toast.error("please login");
    }
  };

  if (IsOpen) {
    return (
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
                SIP Amount
              </h3>
            </div>

            <div className="flex items-center justify-between w-full mt-5 gap-x-2">
              <input
                type="number"
                autoFocus
                min="0"
                pattern="\d+"
                inputMode="numeric"
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
                className="flex-1 block h-10 px-4 text-sm text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div className="mt-4 sm:flex sm:items-center sm:justify-between sm:mt-6 sm:-mx-2">
              <button
                onClick={() => SetIsOpen(false)}
                className="px-4 sm:mx-2 w-full py-2.5 text-sm font-medium dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
              >
                Cancel
              </button>

              <button
                onClick={handleClick}
                className={`px-4 sm:mx-2 w-full py-2.5 mt-3 sm:mt-0 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform ${
                  Buy ? "bg-green-700 hover:bg-green-900 " : ""
                }  bg-blue-600 rounded-md  focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40`}
              >
                Start SIP
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default InputModalCrypto;
