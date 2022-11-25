import React, { useEffect, useState } from "react";
import axios from "axios";
import { LoginPage } from "./components/loginPage/loginPage";

function App() {
  const API_URL_TOP_10 =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h%2C7d";
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

  return (
    <div className="flex justify-center">
      <div className="w-[80%]">
        <LoginPage coins={coins} />
      </div>
    </div>
  );
}

export default App;
