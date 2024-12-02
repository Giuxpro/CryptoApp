import { CoinRowProps } from "../interfaces/coinRowProps.interfaces";

export const CoinRow = ({coin, index}:CoinRowProps) => {

  const handleParseFloat = (value: number | null | undefined): number => {
    if (value == null) {
      return 0;
    }
    const priceParsed = parseFloat(value.toFixed(2));
    return priceParsed;
  };
  const handleToString = (value: number | null | undefined): string => {
    if (value == null) {
      return '0';
    }
    const formattedValue = value.toLocaleString('en-US');;
    return formattedValue;
  };

  return (
    <tr className="my-3 ml-10">
      <td className="px-10">{index}</td>
      <td className="flex items-center my-3">
        <img src={coin.image} alt={coin.name} className="w-2/12 me-4 img-fluid"/>
        <span>{coin.name}</span>
        <span className="ms-3 text-gray-500 uppercase">{coin.symbol}</span>
      </td>
      <td className="px-10" >{handleToString(coin.current_price)}</td>
      <td className={`${coin.price_change_percentage_1h_in_currency > 0 ? "text-green-600 px-3" : "text-red-600 px-3"}`}>{handleParseFloat(coin.price_change_percentage_1h_in_currency)}</td>
      <td className={`${coin.price_change_percentage_24h_in_currency > 0 ? "text-green-500 px-3" : "text-red-500 px-3"}`}>{handleParseFloat(coin.price_change_percentage_24h_in_currency)}</td>
      <td className={`${coin.price_change_percentage_7d_in_currency > 0 ? "text-green-500 px-3" : "text-red-500 px-3"}`}>{handleParseFloat(coin.price_change_percentage_7d_in_currency)}</td>
      <td className="px-3">{handleToString(coin.market_cap)}</td>
      <td className="px-3">{handleToString(coin.total_volume)}</td>
      <td className="px-3">{handleToString(coin.total_supply)}</td>
    </tr>
  )
}


