import React from 'react';
import Home from './paginas/home/Home';
import Navbar from './Components/Estaticos/navbar/Navbar';
import Footer from './Components/Estaticos/footer/Footer';
import './App.css';
import { Grid } from '@material-ui/core'

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
      
      </>
  );
}

export default App;
