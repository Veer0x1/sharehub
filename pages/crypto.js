import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import AssetPage from "./../components/AssetPage";

const options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    'tiers[0]': '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
  },
  headers: {
    'X-RapidAPI-Key': 'af4250d833mshef08644cdfbbf74p104647jsn8e280c3672e8',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};

const Crypto = ({ cryptoData }) => {
  console.log(cryptoData)
  if (cryptoData.length === 0) {
    return <h1>Fetching Data...</h1>;
  } else {
    return<> <Navbar /><AssetPage CryptoData={cryptoData} /></>;
  }
};

export default Crypto;

export async function getServerSideProps() {
  try {
    const response = await axios.request(options);
  
    const cryptoData = response.data.data.coins;
    
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
