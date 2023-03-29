import React, { useState, useEffect } from "react";
import axios from "axios";
import AssetPage from "./../components/AssetPage";

const options = {
  method: "GET",
  path: "​https://financialmodelingprep.com/api/v3/quote/AAPL,FB?apikey=4feb348a2361918699b6ce5708c52126",
  hostname: 'financialmodelingprep.com',
  port: 443
  
};

const Stocks = ({stocksData}) => {
  
  if (stocksData.length === 0) {
    return <h1>Fetching Data...</h1>;
  } else {
    return <AssetPage CryptoData={cryptoData} />;
  }
};

export default Stocks;

export async function getServerSideProps() {
  try {
    const response = await axios.request(options);
    console.log("here is response")
    console.log(response)
    const stocksData = response.data;
    return {
      props: {
        stocksData: stocksData,
      },
    };
  } catch (error) {
    console.log('error occured >>>>>')
    console.log(error);
    return {
      props: {
        stocksData: [],
      },
    };
  }
}
