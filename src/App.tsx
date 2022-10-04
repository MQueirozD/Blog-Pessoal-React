import React from 'react';
import Home from './paginas/home/Home';
import Navbar from './Components/Estaticos/navbar/Navbar';
import Footer from './Components/Estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Login from './paginas/login/Login';
import './App.css';
import { Grid } from '@material-ui/core'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes> {/*Antigo Switch*/}
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
             <Route path="/home" element={<Home />} /> {/*// path -T  oda vez q acesar /home vai pra Home */}
            <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          </Routes>
        </div>
        <Footer />
      </ BrowserRouter >
    </>
  );
}

export default App;
