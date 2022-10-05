import React from 'react';
import Home from './paginas/home/Home';
import Navbar from './Components/Estaticos/navbar/Navbar';
import Footer from './Components/Estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Login from './paginas/login/Login';
import './App.css';
import { Grid } from '@material-ui/core'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListaTema from './Components/temas/listatema/ListaTema';
import ListaPostagens from './Components/postagens/listapostagem/ListaPostagens';

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
            <Route path="/temas" element={<ListaTema />} />
            <Route path="/postagens" element={<ListaPostagens />} />
          </Routes>
        </div>
        <Footer />
      </ BrowserRouter >
    </>
  );
}

export default App;
