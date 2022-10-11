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
import ListaPostagem from './Components/postagens/listapostagem/ListaPostagem';
import CadastroPost from './Components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './Components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './Components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './Components/temas/deletarTema/DeletarTema';
import { Provider } from 'react-redux';
import store from './tokens/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>
      <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        {/* <div style={{minHeight: '100vh'}}> pega 100de altura  */}
        <div style={{ minHeight: '100vh' }}>
          <Routes> {/*Antigo Switch*/}
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
             <Route path="/home" element={<Home />} /> {/*// path -T  oda vez q acesar /home vai pra Home */}
            <Route path="/cadastrousuario" element={<CadastroUsuario />} />
            <Route path="/temas" element={<ListaTema />} />
            <Route path="/posts" element={<ListaPostagem />} />
            <Route path="/formularioPostagem" element={<CadastroPost />} />
          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
          <Route path="/formularioTema" element={<CadastroTema />} />
          <Route path="/formularioTema/:id" element={<CadastroTema />} />
          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
          <Route path="/deletarTema/:id" element={<DeletarTema />} />
          </Routes>
        </div>
        <Footer />
      </ BrowserRouter >
      </Provider>
    </>
  );
}

export default App;
