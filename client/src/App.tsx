
import React from 'react';
import Parse from 'parse';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { AppReactToastify } from './Components/AppReactToastify';
import { PrivateRoute } from './Components/PrivateRoute';
import { SignUp } from './pages/SignUp';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Wallet } from './pages/Wallet';

const { REACT_APP_API_URL, REACT_APP_APP_ID, REACT_APP_API_URL_PARSE } = process.env

Parse.initialize(REACT_APP_APP_ID);
Parse.serverURL = `${REACT_APP_API_URL_PARSE}`;


const initializeParseSession = async () => {
  const token = sessionStorage.getItem('authToken');

  if (token) {
    try {
      await Parse.User.become(token);
      console.log("User authenticated with token:", token);
    } catch (error) {
      console.error("Error during session restoration:", error);
      sessionStorage.removeItem('authToken');
    }
  }
};


function App() {
  React.useEffect(() => {
    initializeParseSession();
  }, []);

  return (
   
      <Router>
          <AppReactToastify/>
        <Routes>
          <Route path={`/`} element={<Login/>}/>
          <Route path={`/login`} element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/home' element={<PrivateRoute element={Home} />} />
          <Route path='/wallet' element={<PrivateRoute element={Wallet} />} />
        </Routes>
      </Router>
    
  );
}

export default App;
