import logo from './logo.svg';
import './App.css';
import { Home } from './Home';
import { Strategies } from './Strategies';
import Login from "./components/Login";
import Signup from './components/Signup';
import Test from './components/test';
import NavBarCmp from './components/NavigationBar';
//import Dashbaord from './components/Dashbaord';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App container'>
        <h3 className='d-flex justify-content-center m-3'>
          Welcome Mani Bot
        </h3>
        <Home />
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/test' element={<Test />} />
          <Route path='/strategies' element={<Strategies />} />
          <Route exact path="/" element={<Home />} />
          <Route path='/navigationbar' element={<NavBarCmp />} />
        </Routes>

      </div >
    </BrowserRouter>
  );
}

export default App;
