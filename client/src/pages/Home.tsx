import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//Components
import { getCoins } from '../services/home.services';
import { TableCoins } from '../Components/TableCoins';

//Interfaces
import { Coin } from '../interfaces/coin.interfaces';


const Home = () => {
  const navigate = useNavigate();
  const [coinData, setCoinData] = useState<Coin[]>([])

  useEffect( () => {
    getCoinData();
    
  },[])

    const getCoinData = async () => {
        const listCoins = await getCoins(1)
        console.log("listCoins", listCoins)
        setCoinData(listCoins)
    };

  const handleLogout = () => {
    // Aquí iría la lógica para hacer logout
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-7xl p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Crypto Market</h2>
    
        <TableCoins coinData={coinData} />

        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Home;
