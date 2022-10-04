import axios from "axios";

export const api = axios.create({
    baseURL: 'https://blogpessoalbackendgen.herokuapp.com/'
})

export const cadastroUsuarios = async(url: any,dados: any,setDado: any) => { 
    const resposta = await api.post(url,dados)
    setDado(resposta.data)
}
export const login = async(url: any,dados: any,setDado: any) => { 
    const resposta = await api.post(url,dados)
    setDado(resposta.data.token)
    //pega a respopsta da API - ('https://blogpessoalbackendgen.herokuapp.com/')
}



