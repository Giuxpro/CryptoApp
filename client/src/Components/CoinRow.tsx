import { CoinRowProps } from "../interfaces/coinRowProps.interfaces";
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';

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
  const price_1h = coin.price_change_percentage_1h_in_currency;
  const price_24h = coin.price_change_percentage_24h_in_currency;
  const price_7d = coin.price_change_percentage_7d_in_currency;

  return (
  <tr className="my-3 ml-10">
    <td className="px-5 font-medium">{index}</td>
    
    <td className="px-8 font-medium">
      <div className="min-w-[220px] flex items-center">
        <img src={coin.image} alt={coin.name} className="w-6 h-6 me-2 img-fluid" />
        <span className="font-medium">{coin.name}</span>
        <span className="ms-2 text-gray-500 uppercase font-medium">{coin.symbol}</span>
      </div>
    </td>

    {/* Precios */}
    <td className="px-10 font-medium">{`$${handleToString(coin.current_price)}`}</td>

    {/* Porcentaje 1h */}
    <td className={`min-h-[60px] px-3 font-medium ${price_1h > 0 ? "text-green-600" : "text-red-600"}`}>
      <div className="flex items-center justify-center">
        {price_1h > 0 ? <FaCaretUp /> : <FaCaretDown />}
        {`${handleParseFloat(price_1h)}%`}
      </div>
    </td>

    {/* Porcentaje 24h */}
    <td className={`min-h-[60px] px-3 font-medium ${price_24h > 0 ? "text-green-500" : "text-red-500"}`}>
      <div className="flex items-center justify-center">
        {price_24h > 0 ? <FaCaretUp /> : <FaCaretDown />}
        {`${handleParseFloat(price_24h)}%`}
      </div>
    </td>

    {/* Porcentaje 7d */}
    <td className={`min-h-[60px] px-3 font-medium ${price_7d > 0 ? "text-green-500" : "text-red-500"}`}>
      <div className="flex items-center justify-center">
        {price_7d > 0 ? <FaCaretUp /> : <FaCaretDown />}
        {`${handleParseFloat(price_7d)}%`}
      </div>
    </td>

    {/* Otros valores */}
    <td className="px-3">
      <div className="flex items-center justify-end font-medium">
        {`$${handleToString(coin.market_cap)}`}
      </div>
    </td>

    <td className="px-3">
      <div className="flex items-center justify-end font-medium">
        {`$${handleToString(coin.total_volume)}`}
      </div>
    </td>
    <td className="px-3">
      <div className="flex items-center justify-end font-medium">
        {`$${handleToString(coin.total_supply)}`}
      </div>
    </td>
  </tr>
);
}


// import { Row } from '@tanstack/react-table'; // Importar la fila
// import { FaCaretUp, FaCaretDown } from 'react-icons/fa';
// import { Coin } from '../interfaces/coin.interfaces';

// interface CoinRowProps {
//   row: Row<Coin>;
// }

// export const CoinRow = ({ row }: CoinRowProps) => {
//   const { index, original } = row; // Datos de la fila

//   const handleParseFloat = (value: number | null | undefined): number => {
//         if (value == null) {
//           return 0;
//         }
//         const priceParsed = parseFloat(value.toFixed(2));
//         return priceParsed;
//       };
//       const handleToString = (value: number | null | undefined): string => {
//         if (value == null) {
//           return '0';
//         }
//         const formattedValue = value.toLocaleString('en-US');;
//         return formattedValue;
//       };

//   const price_1h = original.price_change_percentage_1h_in_currency;
//   const price_24h = original.price_change_percentage_24h_in_currency;
//   const price_7d = original.price_change_percentage_7d_in_currency;

//   return (
//     <tr className="my-3 ml-10">
//       <td className="px-5 font-medium">{index + 1}</td>
//       <td className="px-8 font-medium">
//         <div className="min-w-[220px] flex items-center">
//           <img
//             src={original.image}
//             alt={original.name}
//             className="w-6 h-6 me-2 img-fluid"
//           />
//           <span className="font-medium">{original.name}</span>
//           <span className="ms-2 text-gray-500 uppercase font-medium">
//             {original.symbol}
//           </span>
//         </div>
//       </td>
//       <td className="px-10 font-medium">{`$${handleToString(original.current_price)}`}</td>

//       {/* Porcentajes */}
//       <td className={`min-h-[60px] px-3 font-medium ${price_1h > 0 ? 'text-green-600' : 'text-red-600'}`}>
//         <div className="flex items-center justify-center">
//           {price_1h > 0 ? <FaCaretUp /> : <FaCaretDown />}
//           {`${handleParseFloat(price_1h)}%`}
//         </div>
//       </td>
//       <td className={`min-h-[60px] px-3 font-medium ${price_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
//         <div className="flex items-center justify-center">
//           {price_24h > 0 ? <FaCaretUp /> : <FaCaretDown />}
//           {`${handleParseFloat(price_24h)}%`}
//         </div>
//       </td>
//       <td className={`min-h-[60px] px-3 font-medium ${price_7d > 0 ? 'text-green-500' : 'text-red-500'}`}>
//         <div className="flex items-center justify-center">
//           {price_7d > 0 ? <FaCaretUp /> : <FaCaretDown />}
//           {`${handleParseFloat(price_7d)}%`}
//         </div>
//       </td>

//       {/* Otros valores */}
//       <td className="px-3">
//         <div className="flex items-center justify-end font-medium">
//           {`$${handleToString(original.market_cap)}`}
//         </div>
//       </td>
//       <td className="px-3">
//         <div className="flex items-center justify-end font-medium">
//           {`$${handleToString(original.total_volume)}`}
//         </div>
//       </td>
//       <td className="px-3">
//         <div className="flex items-center justify-end font-medium">
//           {`$${handleToString(original.total_supply)}`}
//         </div>
//       </td>
//     </tr>
//   );
// };
