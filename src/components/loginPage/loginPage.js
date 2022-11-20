import Logo from "../../Logo.svg";
export const LoginPage = ({ coins }) => {
  return (
    <div className="py-10">
      <div className="flex justify-between items-end mb-10">
        <div className="w-[40%]">
          <img src={Logo} alt="logo" className="w-[100%]" />
        </div>
        <div className="flex w-[35%] justify-end items-center">
          <button className="border-2 border-dark-purple rounded-lg w-[50%] py-1 mr-3">
            Log in
          </button>
          <button className="border-2 border-dark-purple rounded-lg w-[50%] py-1 bg-dark-purple">
            Sign up
          </button>
        </div>
      </div>
      <main className="w-full overflow-x-auto">
        <table className="table-auto text-sm w-full">
          <thead className="">
            <tr className="border-y-[1px] border-grey">
              <th className="py-1">#</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>7d</th>
              <th>Market Cap</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <tr className="border-b-[1px] border-grey">
                <td className="py-4 px-2">{coin.market_cap_rank}</td>
                <td className="px-2">
                  <div className="flex justify-start items-center w-full">
                    <img className="h-5 w-5 mr-2" src={coin.image} alt="logo" />
                    <p className="mr-2">{coin.name}</p>
                    <span className="block">{coin.symbol.toUpperCase()}</span>
                  </div>
                </td>
                <td className="px-2">{coin.current_price}</td>
                <td
                  className={
                    coin.price_change_percentage_24h_in_currency
                      .toString()
                      .includes("-")
                      ? "px-2 text-red"
                      : "px-2 text-green"
                  }
                >
                  {coin.price_change_percentage_24h_in_currency.toFixed(2)}%
                </td>
                <td
                  className={
                    coin.price_change_percentage_24h_in_currency
                      .toString()
                      .includes("-")
                      ? "px-2 text-red"
                      : "px-2 text-green"
                  }
                >
                  {coin.price_change_percentage_7d_in_currency.toFixed(2)}
                </td>
                <td className="px-2">{coin.market_cap}</td>
                <td className="px-2">${coin.total_volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};
