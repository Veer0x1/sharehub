import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import MFAsset from "./../components/MFAsset";

const options = {
  method: "GET",
  url: "https://latest-mutual-fund-nav.p.rapidapi.com/fetchAllMutualFundFamilies",
  headers: {
    "X-RapidAPI-Key": "af4250d833mshef08644cdfbbf74p104647jsn8e280c3672e8",
    "X-RapidAPI-Host": "latest-mutual-fund-nav.p.rapidapi.com",
  },
};

const MutualFunds = ({ cryptoData }) => {
  if (cryptoData.length === 0) {
    return <h1>Fetching Data...</h1>;
  } else {
    return (
      <>
        {" "}
        <Navbar />
        <MFAsset CryptoData={cryptoData} />
      </>
    );
  }
};

export default MutualFunds;

export async function getServerSideProps() {
  try {
    const response = await axios.request(options);

    const cryptoData = response.data;

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
