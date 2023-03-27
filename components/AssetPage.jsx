import React from "react";

const AssetPage = () => {
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
                <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gradient-to-r from-green-700 to-green-1000">
                <td className="p-3 ">
                    <p>97412378923</p>
                </td>
                <td className="p-3">
                    <p>Microsoft Corporation</p>
                </td>
                <td className="p-3">
                    <p>14 Jan 2022</p>
                    <p className="dark:text-gray-400">Friday</p>
                </td>

                <td className="p-3 text-right">
                    <p>$15,792</p>
                </td>
                <td className="p-3 text-right">
                    <button className="px-3 py-1 font-semibold rounded-md dark:bg-warning dark:text-gray-900 mr-1 text-primary bg-transparent border border-warning hover:bg-transparent hover:border-warning hover:text-white ">
                    Buy
                    </button>
                    <button className="px-3 py-1 font-semibold rounded-md dark:bg-error dark:text-white bg-transparent border border-error hover:bg-transparent hover:border-error hover:text-white">
                    Sell
                    </button>
                </td>
                </tr>
                <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gradient-to-r from-green-700 to-green-1000">
                <td className="p-3">
                    <p>97412378923</p>
                </td>
                <td className="p-3">
                    <p>Tesla Inc.</p>
                </td>
                <td className="p-3">
                    <p>14 Jan 2022</p>
                    <p className="dark:text-gray-400">Friday</p>
                </td>

                <td className="p-3 text-right">
                    <p>$275</p>
                </td>
                <td className="p-3 text-right">
                    <button className="px-3 py-1 font-semibold rounded-md dark:bg-warning dark:text-gray-900 mr-1 text-primary hover:bg-transparent border border-warning hover:bg-transparent hover:border-warning hover:text-white">
                    Buy
                    </button>
                    <button className="px-3 py-1 font-semibold rounded-md dark:bg-error dark:text-white hover:bg-transparent border border-error hover:bg-transparent hover:border-error hover:text-white">
                    Sell
                    </button>
                </td>
                </tr>
                <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gradient-to-r from-green-700 to-green-1000">
                <td className="p-3">
                    <p>97412378923</p>
                </td>
                <td className="p-3">
                    <p>Coca Cola co.</p>
                </td>
                <td className="p-3">
                    <p>14 Jan 2022</p>
                    <p className="dark:text-gray-400">Friday</p>
                </td>

                <td className="p-3 text-right">
                    <p>$8,950,500</p>
                </td>
                <td className="p-3 text-right">
                    <button className="px-3 py-1 font-semibold rounded-md dark:bg-warning dark:text-gray-900 mr-1 text-primary hover:bg-transparent border border-warning hover:bg-transparent hover:border-warning hover:text-white">
                    Buy
                    </button>
                    <button className="px-3 py-1 font-semibold rounded-md dark:bg-error dark:text-white hover:bg-transparent border border-error hover:bg-transparent hover:border-error hover:text-white">
                    Sell
                    </button>
                </td>
                </tr>
                <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gradient-to-r from-green-700 to-green-1000">
                <td className="p-3">
                    <p>97412378923</p>
                </td>
                <td className="p-3">
                    <p>Nvidia Corporation</p>
                </td>
                <td className="p-3">
                    <p>14 Jan 2022</p>
                    <p className="dark:text-gray-400">Friday</p>
                </td>

                <td className="p-3 text-right">
                    <p>$98,218</p>
                </td>
                <td className="p-3 text-right">
                    <button className="px-3 py-1 font-semibold rounded-md dark:bg-warning dark:text-gray-900 mr-1 text-primary hover:bg-transparent border border-warning hover:bg-transparent hover:border-warning hover:text-white">
                    Buy
                    </button>
                    <button className="px-3 py-1 font-semibold rounded-md dark:bg-error dark:text-white hover:bg-transparent border border-error hover:bg-transparent hover:border-error hover:text-white">
                    Sell
                    </button>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
    </div>
        
  );
};


export default AssetPage;
