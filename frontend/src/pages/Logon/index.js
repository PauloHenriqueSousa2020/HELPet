import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api';

import './styles.css';
import { FiLogIn } from 'react-icons/fi';
import logoImg from '../../assets/logo.png';
import splash from '../../assets/splash.png'

export default function Logon(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        const data = {
            email,
            senha
        }
        try{
            const response = await api.post('sessions', data); 
            localStorage.setItem('userName', response.data.name);
            localStorage.setItem('userID', response.data.id);
            history.push('/home')
        } catch(err) {
            alert('Falha no login. Tente novamente')
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img className="marginlogo" src={logoImg} alt="HELPet" width="350" height="250" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>
                    <input 
                        className="inputspace" 
                        type="email" 
                        placeholder="Seu email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        className="inputspace" 
                        type="password" 
                        placeholder="Sua senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />

                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn className="FiLogInMargin" size={16} color="#392d27"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={splash} alt="splash" width="596" height="574"/>
        </div>
    );
}