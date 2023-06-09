import React, { useEffect, useState } from "react";
import AssetPage from "../AssetPage";

import { db } from "../../utility/firebase.js";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { UserAuth } from "../../context/AuthContext";

const MutualFundsPortfolio = () => {
  const { user } = UserAuth();
  const [userStockData, setUserStockData] = useState([]);

  useEffect(() => {
    const getUserStockData = async () => {
      const docRef = doc(db, "user", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // console.log(docSnap.data().Stocks);
        setUserStockData(docSnap.data().MutualFunds);
      } else {
        console.log("unable to fetch data");
      }
    };

    getUserStockData();
  }, [user]);
  
  if (userStockData) {
    return (
      <div className="m-5">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Mutual Fund name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>

                <th scope="col" className="px-6 py-3">
                  Lock Period
                </th>
              </tr>
            </thead>
            <tbody>
              {userStockData.map((stock, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {stock.name}
                    </th>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{stock.quantity}</td>

                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">3 year</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};

export default MutualFundsPortfolio;
