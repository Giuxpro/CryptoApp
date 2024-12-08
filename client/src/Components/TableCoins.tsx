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








// import React, { useRef } from 'react';
// import { FaCaretUp, FaCaretDown } from 'react-icons/fa';
// import { useReactTable, ColumnDef, getCoreRowModel, flexRender } from '@tanstack/react-table';
// import { useVirtualizer, VirtualItem  } from '@tanstack/react-virtual';
// import { TableCoinsProps } from '../interfaces/tableCoinsProps.interfaces';
// import { Coin } from '../interfaces/coin.interfaces';
// import { CoinRow } from './CoinRow';

// const titlesHeader = [
//   '#', 
//   'Name', 
//   'Price', 
//   '1h%', 
//   '24h%', 
//   '7d%', 
//   'Market Cap', 
//   'Volume(24h)',
//   'Circulating Supply',
// ];

// export const TableCoins = ({ coinData, searchCoin }: TableCoinsProps) => {

//   const handleParseFloat = (value: number | null | undefined): number => {
//     if (value == null) {
//       return 0;
//     }
//     const priceParsed = parseFloat(value.toFixed(2));
//     return priceParsed;
//   };
//   const handleToString = (value: number | null | undefined): string => {
//     if (value == null) {
//       return '0';
//     }
//     const formattedValue = value.toLocaleString('en-US');;
//     return formattedValue;
//   };
  
//   // Filtrar las monedas según la búsqueda
//   const filteredCoins = coinData.filter(
//     (coin) =>
//       coin.name.toLowerCase().includes(searchCoin.toLowerCase()) ||
//       coin.symbol.toLowerCase().includes(searchCoin.toLowerCase())
//   );

//   // Definir las columnas con el tipo Coin
//   const columns: ColumnDef<Coin>[] = [
//     {
//       accessorKey: 'index',
//       header: '#',
//     },
//     {
//       accessorKey: 'name',
//       header: 'Name',
//       cell: ({ row }) => (
//         <div className="min-w-[220px] flex items-center">
//           <img
//             src={row.original.image}
//             alt={row.original.name}
//             className="w-6 h-6 me-2 img-fluid"
//           />
//           <span className="font-medium">{row.original.name}</span>
//           <span className="ms-2 text-gray-500 uppercase font-medium">
//             {row.original.symbol}
//           </span>
//         </div>
//       ),
//     },
//     {
//       accessorKey: 'current_price',
//       header: 'Price',
//       cell: ({ row }) => `$${handleToString(row.original.current_price)}`,
//     },
//     {
//       accessorKey: 'price_change_percentage_1h_in_currency',
//       header: '1h%',
//       cell: ({ row }) => (
//         <div
//           className={`min-h-[60px] px-3 font-medium ${
//             row.original.price_change_percentage_1h_in_currency > 0
//               ? 'text-green-600'
//               : 'text-red-600'
//           }`}
//         >
//           <div className="flex items-center justify-center">
//             {row.original.price_change_percentage_1h_in_currency > 0
//               ? <FaCaretUp />
//               : <FaCaretDown />}
//             {`${handleParseFloat(row.original.price_change_percentage_1h_in_currency)}%`}
//           </div>
//         </div>
//       ),
//     },
//     {
//       accessorKey: 'price_change_percentage_24h_in_currency',
//       header: '24h%',
//       cell: ({ row }) => (
//         <div
//           className={`min-h-[60px] px-3 font-medium ${
//             row.original.price_change_percentage_24h_in_currency > 0
//               ? 'text-green-500'
//               : 'text-red-500'
//           }`}
//         >
//           <div className="flex items-center justify-center">
//             {row.original.price_change_percentage_24h_in_currency > 0
//               ? <FaCaretUp />
//               : <FaCaretDown />}
//             {`${handleParseFloat(row.original.price_change_percentage_24h_in_currency)}%`}
//           </div>
//         </div>
//       ),
//     },
//     {
//       accessorKey: 'price_change_percentage_7d_in_currency',
//       header: '7d%',
//       cell: ({ row }) => (
//         <div
//           className={`min-h-[60px] px-3 font-medium ${
//             row.original.price_change_percentage_7d_in_currency > 0
//               ? 'text-green-500'
//               : 'text-red-500'
//           }`}
//         >
//           <div className="flex items-center justify-center">
//             {row.original.price_change_percentage_7d_in_currency > 0
//               ? <FaCaretUp />
//               : <FaCaretDown />}
//             {`${handleParseFloat(row.original.price_change_percentage_7d_in_currency)}%`}
//           </div>
//         </div>
//       ),
//     },
//     {
//       accessorKey: 'market_cap',
//       header: 'Market Cap',
//       cell: ({ row }) => `$${handleToString(row.original.market_cap)}`,
//     },
//     {
//       accessorKey: 'total_volume',
//       header: 'Volume(24h)',
//       cell: ({ row }) => `$${handleToString(row.original.total_volume)}`,
//     },
//     {
//       accessorKey: 'total_supply',
//       header: 'Circulating Supply',
//       cell: ({ row }) => `$${handleToString(row.original.total_supply)}`,
//     },
//   ];

  
//   const table = useReactTable({
//     data: filteredCoins,
//     columns,
//     getRowId: (row) => row.symbol,
//     getCoreRowModel: getCoreRowModel(), 
//   });

//   const parentRef = useRef<HTMLDivElement>(null);

//   const rowVirtualizer = useVirtualizer({
//     count: filteredCoins.length, // Número de filas que estamos virtualizando
//     estimateSize: () => 50, // Estimación del tamaño de cada fila (ajustar según el diseño)
//     getScrollElement: () => parentRef.current, // Necesitamos proporcionarle el contenedor
//   });

//   return (
//     <div className="overflow-x-auto" ref={parentRef} style={{ height: '500px' }}>
//       <table className="min-w-full table-auto text-sm font-light border-collapse">
//         <thead className="bg-gray-800 text-white">
//           {table.getHeaderGroups().map((headerGroup) => (
//             <tr className="px-6 py-4 text-left" key={headerGroup.id}>
//               {headerGroup.headers.map((header) => (
//                 <th key={header.id} className="px-10 py-2">
//                   {flexRender(header.column.columnDef.header, header.getContext())}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody>
//           {rowVirtualizer.getVirtualItems().map((virtualRow) => {
//             const row = table.getRowModel().rows[virtualRow.index]; // Usar las filas procesadas por react-table
//             return (
//               <tr key={virtualRow.index} style={{ height: 50 }}>
//                 <CoinRow row={row} key={virtualRow.index} /> {/* Pasar la fila procesada a CoinRow */}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };
