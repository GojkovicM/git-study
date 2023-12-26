import './App.css';
import HomePage from './Pages/HomePage/HomePage'
import LogInPage from './Pages/LogInPage/LoginPage'
import SignUpPage from './Pages/SignUpPage/SignUpPage'
import FavoritesPage from './Pages/FavoritesPage/FavoritesPage'
import MapPage from './Pages/MapPage/MapPage'
import WeatherPage from './Pages/WeatherPage/WeatherPage'
import React,{useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';


function App() {


  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path='/LogIn' element={<LogInPage/>} />
          <Route path='/SignUp' element={<SignUpPage/>} />
          <Route path='/Favorites' element={<FavoritesPage/>} />
          <Route path='/Map' element={<MapPage/>} />
          <Route path='/Weather' element={<WeatherPage/>} />
        </Routes>
         
          
    </div>
  );
}

  

export default App;
    
    
    
