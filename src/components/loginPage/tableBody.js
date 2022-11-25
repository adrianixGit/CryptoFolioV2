export const TableBody = ({ coins }) => {
  return (
    <tbody>
      {coins.map((coin) => (
        <tr key={coin.market_cap_rank} className="border-b-[1px] border-grey">
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
  );
};
