
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import { AppReactToastify } from './Components/AppReactToastify';
import { SignUp } from './pages/SignUp';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
// import { Wallet } from './pages/Wallet';

function App() {
  return (
   
      <Router>
          <AppReactToastify/>
        <Routes>
          <Route path={`/`} element={<Login/>}/>
          <Route path={`/login`} element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/home' element={<Home/>}/>
          {/* <Route path='/wallet' element={<Wallet/>}/> */}
        </Routes>
      </Router>
    
  );
}

export default App;
