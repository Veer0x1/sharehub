import React, { useState, useEffect } from "react";
import axios from "axios";
import AssetPage from "./../components/AssetPage";

const options = {
  method: "GET",
  url: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?sort=cmc_rank&limit=100",
  headers: {
    "X-CMC_PRO_API_KEY": "f78ba878-2d43-48dd-b1b8-a16530c92d4d",
  },
};

// const options1 = {
//   method: "GET",
//   url: `rest.coinapi.io/v1/exchangerate/${crypto.symbol}/USD`,
//   headers: {
//     "X-CoinAPI-Key": "E58B822A-0FA1-4383-840C-57D0CF8E7902",
//   },
// };

const Crypto = ({ cryptoData }) => {
  if (cryptoData.length === 0) {
    return <h1>Fetching Data...</h1>;
  } else {
    return <AssetPage CryptoData={cryptoData} />;
  }
};

export default Crypto;

export async function getServerSideProps() {
  try {
    const response = await axios.request(options);
  
    const cryptoData = response.data.data;
    return {
      props: {
        cryptoData: cryptoData,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        cryptoData: [],
      },
    };
  }
}
