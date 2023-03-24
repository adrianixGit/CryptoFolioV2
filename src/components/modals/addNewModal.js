import { useRef, useEffect, useState } from "react";
import axios from "axios";
export const AddNew = ({ showAddNewModal, setShowAddNewModal }) => {
  const [coins, setCoins] = useState([]);
  const [searchCoin, setSearchCoin] = useState("");
  const modalRef = useRef();

  const API_URL_COINS =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const fetchCoin = () => {
    return axios.get(API_URL_COINS).then((response) => setCoins(response.data));
  };

  const hideModal = (e) => {
    if (!modalRef.current.contains(e.target)) {
      setShowAddNewModal(false);
    }
  };

  const filterCoins = (array) =>
    array.filter(
      (coin) => coin.id.includes(searchCoin)
      //!!searchCoin ? coin.id.includes(searchCoin) : true
    );
  useEffect(() => {
    fetchCoin();
    document.addEventListener("mousedown", hideModal);
    return () => document.removeEventListener("mousedown", hideModal);
  }, []);

  return (
    <div
      className={
        showAddNewModal
          ? "absolute  block w-full h-full top-0 left-0 z-10"
          : "absolute hidden"
      }
    >
      <div className="flex justify-center items-center w-full h-full bg-modal-background overflow-hidden">
        <div
          className=" flex justify-center modal-box py-14 bg-dark-background"
          ref={modalRef}
        >
          <form className="w-[90%]">
            <h2 className="text-3xl mb-6">Select coin </h2>
            <div className="mb-4">
              <input
                className="border border-grey rounded-lg w-full py-2 px-3 placeholder:text-grey bg-input-background leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Search..."
                onChange={(e) => {
                  setSearchCoin(e.target.value);
                }}
              />
            </div>

            <div className="flex items-center flex-col">
              <div className="flex flex-col items-center h-[50vh] w-[100%] overflow-auto ">
                {filterCoins(coins).map((coin) => (
                  <p key={coin.id}>
                    {coin.id}, {coin.symbol}
                  </p>
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
