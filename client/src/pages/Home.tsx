import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//Components
import { getCoins } from '../services/home.services';
import { TableCoins } from '../Components/TableCoins';

//Interfaces
import { Coin } from '../interfaces/coin.interfaces';
import { NavbarComp } from '../Components/Navbar';
import { LogoutButton } from '../Components/LogOut';


export const Home = () => {
  const navigate = useNavigate();
  const [coinData, setCoinData] = useState<Coin[]>([])
  const [searchCoin, setSearchCoin] = useState<string>('')

  useEffect( () => {
    getCoinData();
    
  },[])

    const getCoinData = async () => {
        const listCoins = await getCoins(1)
        console.log("listCoins", listCoins)
        setCoinData(listCoins)
    };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
<div className="flex flex-col items-center justify-center bg-gray-100">
  <div className="w-full max-w-7xl p-6 bg-white shadow-md rounded-md">
    <div className="flex justify-between items-center w-full mb-5">
      <div className="flex-1 text-center">
        <h2 className="text-2xl font-bold flex justify-center ml-12">Crypto Market</h2>
      </div>
      <div className="flex-none">
        <LogoutButton handleLogout={handleLogout}/>
      </div>
    </div>
    <NavbarComp setSearchCoin={setSearchCoin}/>
    <TableCoins coinData={coinData} searchCoin={searchCoin}/>
  </div>
</div>

);
};

