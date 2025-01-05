import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import  Home from './components/Home';
import  Login from './components/Login';
import  Navbar from './components/Navbar';
import { useState } from 'react';
import UserActions from './components/UserActions';
import Registration from './components/Registeration';

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  return (
    <div className="App">
      <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route
          path="/login"
          element={<Login isLoggedIn={isLoggedIn} setisLoggedIn= {setisLoggedIn}/>}
        />
       
        <Route
          path="/user-actions"
          element={<UserActions/>}
        />
        <Route
          path="/register-balgopal"
          element={<Registration/>}
        />
        </Routes>
    </div>
  );
}

export default App;
