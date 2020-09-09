import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';


import './styles.css';
import { phoneMask } from './mask'
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.png';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [cidade, setCidade] = useState('');
    const [endereco, setEndereco] = useState('');
    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();
        const data = {
            name,
            email,
            senha,
            whatsapp,
            cidade,
            endereco,
        };
        try {
            await api.post('users', data);
            alert(`Cadastrado com sucesso! Utilize seu email e senha para logar na plataforma.`);
            history.push('/')
        } catch (err) {
            alert("Erro no cadastro, tente novamente.");
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img className="marginlogo" src={logoImg} alt="HELPet" width="350" height="250" />

                    <p>Faça seu cadastro.</p>
                    <p>Entre na plataforma e ajude o PET a encontrar um lar feliz!</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft className="FiLogInMargin" size={16} color="#41414d" />
                        Voltar para o login
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input
                        placeholder="Nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}

                        required
                    />
                    <input
                        placeholder="Whatsapp"
                        value={phoneMask(whatsapp)}
                        maxLength="15"
                        onChange={e => setWhatsapp(e.target.value)}
                        required
                    />
                    <input
                        placeholder="Cidade"
                        value={cidade}
                        onChange={e => setCidade(e.target.value)}
                        required
                    />
                    <input
                        placeholder="Endereço"
                        value={endereco}
                        onChange={e => setEndereco(e.target.value)}
                        required
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}