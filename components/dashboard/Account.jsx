import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { UserAuth } from "../../context/AuthContext";
import Image from "next/image";
import { db } from "../../utility/firebase.js";
import Rupee from "../../public/rupee.png";
import Investment from "../../public/investment.png";
import Portfolio from "../../public/portfolio.png";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";

const Account = () => {
  const [userAccountData, setUserAccountData] = useState(null);
  const { logout, user, isLoggedIn } = UserAuth();
  const router = useRouter();

  useEffect(() => {
    const getUserData = async () => {
      try {
        if (user) {
          const docRef = doc(db, "user", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserAccountData(docSnap.data());
            // router.push("/dashboard");
          } else {
            console.log("Document does not exist!");
          }
        }
      } catch (error) {
        console.error("Error getting user data:", error);
      }
    };

    getUserData();
  }, [user, setUserAccountData, router]);

  if (userAccountData) {
    return (
      <div className="px-6 pt-6 2xl:container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="md:col-span-2 lg:col-span-1">
            <div className="h-full space-y-6 group p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/50 dark:shadow-none dark:border-gray-700 dark:bg-black bg-opacity-50 shadow-2xl shadow-gray-600/10">
              <Image
                className="h-30 w-30 m-auto hidden sm:block"
                src={Rupee}
                alt=""
                width={200}
                height={200}
              />
              <div>
                <h5 className="text-center text-3xl text-gray-600 dark:text-gray-300">
                  Balance
                </h5>
                <div className="mt-2 flex justify-center gap-4">
                  <h3 className="text-3xl font-bold text-gray-700 dark:text-white">
                    ₹{userAccountData.balance.toFixed(2)}
                  </h3>
                </div>
              </div>
            </div>
          </div>
      
          <div>
            <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/50 dark:shadow-none dark:border-gray-700 dark:bg-black bg-opacity-50 shadow-2xl shadow-gray-600/10 lg:h-full">
              <Image
                className="h-30 w-30 m-auto hidden sm:block"
                src={Investment}
                alt=""
              />
              <div className="mt-6">
                <h5 className="text-center text-3xl text-gray-700 dark:text-gray-300">
                  Invested Value
                </h5>
                <div className="mt-2 flex justify-center gap-4">
                  <h3 className="text-3xl font-bold text-gray-700 dark:text-white">
                    ₹ {userAccountData.investedValue.toFixed(2)}
                  </h3>
                  {/* <div className="flex items-end gap-1 text-red-500">
                    <svg
                      className="w-3"
                      viewBox="0 0 12 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.00001 0L12 8H-3.05176e-05L6.00001 0Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>2%</span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/50 dark:shadow-none dark:border-gray-700 dark:bg-black bg-opacity-50 shadow-2xl shadow-gray-600/10 lg:h-full">
              <Image
                className="h-30 w-30 m-auto hidden sm:block"
                src={Portfolio}
                alt=""
              />
              <div className="mt-6">
                <h5 className="text-center text-3xl text-gray-700 dark:text-gray-300">
                  Portfolio Value
                </h5>
                <div className="mt-2 flex justify-center gap-4">
                  <h3 className="text-3xl font-bold text-gray-700 dark:text-white">
                    ₹ {userAccountData.investedValue.toFixed(2)}
                  </h3>
                  <div className="flex items-end gap-1 text-green-500">
                    <svg
                      className="w-3"
                      viewBox="0 0 12 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.00001 0L12 8H-3.05176e-05L6.00001 0Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>2%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default Account;
