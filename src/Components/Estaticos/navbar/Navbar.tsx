import React from 'react';
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
// import useLocalStorage from 'react-use-localstorage';
import { TokenState } from '../../../tokens/tokensReducer';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { addToken } from '../../../tokens/actions';
import { toast } from 'react-toastify';

function Navbar() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector<TokenState, TokenState["tokens"]> (
        (state) => state.tokens
    );
    

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent =
            <AppBar position="static" >
                <Toolbar variant="dense" >
                    <Box className='cursor' >
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>

                    {/* <Box display="flex" justifyContent="start"> */}
                    <Grid container justifyContent='flex-end'>
                    <Box display="flex" >
                        <Link to='/home' className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/posts" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/temas' className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/formularioTema' className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Cadastrar Tema
                                </Typography>
                            </Box>
                        </Link>
                        <Box mx={1} className='cursor' onClick={goLogout}>
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>

                    </Box>
                    </Grid>
                    

                </Toolbar>
            </AppBar>
    }

    return (
        <>
            {navbarComponent}

        </>
    )
}

export default Navbar;