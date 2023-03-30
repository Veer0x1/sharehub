import React, { useState, useEffect } from "react";
import axios from "axios";
import StocksAsset from "./../components/StocksAsset";
import Navbar from "../components/Navbar";

const options = {
  method: "GET",
  url: "https://latest-stock-price.p.rapidapi.com/price",
  params: { Indices: "NIFTY 50" },
  headers: {
    "X-RapidAPI-Key": "af4250d833mshef08644cdfbbf74p104647jsn8e280c3672e8",
    "X-RapidAPI-Host": "latest-stock-price.p.rapidapi.com",
  },
};

const Stocks = ({ stocksData }) => {
  if (stocksData.length === 0) {
    return <h1>Fetching Data...</h1>;
  } else {
    return (
      <>
        <Navbar />
        <StocksAsset StocksData={stocksData} />
      </>
    );
  }
};

export default Stocks;

export async function getServerSideProps() {
  try {
    const response = await axios.request(options);

    const stocksData = response.data;
    return {
      props: {
        stocksData: stocksData,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        stocksData: [],
      },
    };
  }
}
