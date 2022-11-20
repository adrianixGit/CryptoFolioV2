import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const API_URL_TOP_10 =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
  const [coins, setCoins] = useState([]);

  const fetchCoin = () => {
    return axios
      .get(API_URL_TOP_10)
      .then((response) => setCoins(response.data));
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  console.log(coins);

  return <div className="App">Test</div>;
}

export default App;
