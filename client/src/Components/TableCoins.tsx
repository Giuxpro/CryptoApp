//Components
import { CoinRow } from './CoinRow';

//Interfaces
import { TableCoinsProps } from '../interfaces/tableCoinsProps.interfaces';


const titlesHeader = [
  '#', 
  'Name', 
  'Price', 
  '1h%', 
  '24h%', 
  '7d%', 
  'Market Cap', 
  'Volume(24h)',
  'Circulating Supply',
  // 'Last 7 Days',
];

export const TableCoins = ({ coinData, searchCoin }: TableCoinsProps) => {

  const filteredCoins = coinData.filter(
    (coin) =>  coin.name.toLocaleLowerCase().includes(searchCoin.toLocaleLowerCase()) || coin.symbol.toLocaleLowerCase().includes(searchCoin.toLocaleLowerCase())
  );

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto text-sm font-light border-collapse">
        <thead className="bg-gray-800 text-white">
          <tr className="px-6 py-4 text-left">
            {
              titlesHeader.map((title, index) => {
                return <td key={index} className="px-10 py-2">{title}</td>;
              })
            }
          </tr>
        </thead>
        <tbody>
          {coinData.length > 0 ? (
            filteredCoins.map((coin, index) => (
                <CoinRow coin={coin} index={index + 1} key={index}/>
            ))
          ) : (
            <tr>
              <td colSpan={2} className="px-4 py-2 text-center">Cargando...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};



