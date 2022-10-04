import React, { ChangeEvent, useEffect, useState } from 'react';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import { Link, useNavigate  } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { api, login } from '../../services/Service';
import './Login.css';
import UserLogin from '../../models/UserLogin';


function Login() {

    let history = useNavigate();
    const [token, setToken] = useLocalStorage('token');//faz o uso do tokem na hora de valiadar
    // userLogin, setUserLogin - são valores q vamos dar
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            foto: '',
            token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {// olha so os Input
        setUserLogin({   //vai fazer a alteração sobre as alterações no campo input
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }
        useEffect(()=>{
            if(token != ''){ //verifica se tem ou não o token                
                history('/home')
            }
        }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) { //olha o Form(formulario)- como ele todo
        e.preventDefault();//impedo que o botão atualize a tela
        try{
            //async(url: any,dados: any,setDado: any) é igual a
            await login(`/usuarios/logar`, userLogin, setToken)

            alert('Usuario logado com sucesso!!');
            }
            catch{
                alert('Dados do usuario inconsistentes. Erro ao logar!!');
            }
        }

    return (
        <Grid container direction='row' justifyContent="cente" alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center'
                            className='textos1'>
                            Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>                            
                                <Button type='submit' variant='contained' color='primary' >
                                    Logar
                                </Button>                            
                        </Box>
                    </form>
                    <Box display='flex' justifyContent="cente" marginTop={2} >

                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>
                                Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>
                                Cadastre-se</Typography>
                        </Link>

                    </Box>
                </Box>

            </Grid>
            <Grid xs={6} className='imagem'>

            </Grid>
        </Grid>
    );
}

export default Login;