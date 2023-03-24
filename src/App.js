import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProtectedRoute } from "./components/protectedRoute";
import { LoginPage } from "./view/loginPage";
import {
  createBrowserRouter,
  Route,
  Link,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { PortfolioPage } from "./view/portfolioPage";
import { RootLayout } from "./RootLayout";

function App() {
  const API_URL_TOP_10 =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h%2C7d";
  const [coins, setCoins] = useState([]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route
          path="portfolio"
          element={
            <ProtectedRoute>
              <PortfolioPage coins={coins} />
            </ProtectedRoute>
          }
        />
        <Route index element={<LoginPage coins={coins} />} />
      </Route>
    )
  );

  const fetchCoin = () => {
    return axios
      .get(API_URL_TOP_10)
      .then((response) => setCoins(response.data));
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
