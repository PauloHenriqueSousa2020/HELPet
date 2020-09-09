import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import { FiPower, FiTrash2, FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api';
import logoImg from '../../assets/logo.png';

export default function Profile() {
    const [donors, setDonors] = useState([]);
    const history = useHistory();
    const userID = localStorage.getItem('userID');
    const userName = localStorage.getItem('userName');

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: userID,
            }
        }).then(response => {
            setDonors(response.data)
        })
    }, [userID]);

    async function handleDeleteDonors(id) {
        try{   
            await api.delete(`donors/${id}`, {
                headers: {
                    Authorization: userID,
                }  
            });
        setDonors(donors.filter(donors => donors.id !== id))
        }catch (err) {
            alert('Erro ao deletar caso. Tente novamente.')
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/')
    }

    return(
        <div className="profile-container">
            <header>
                <img className="marginlogo" src={logoImg} alt="HELPet" width="250" height="150"/>   
                <span>Bem vindo(a), {userName}</span>

                <Link className="button " to="/incidents/new"></Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#41414d" />
                </button>
            </header>
            <div className="all_incidentes">
                <h1>Meus casos cadastrados</h1>
                <Link className="back-link justify_item" to="/home">
                        <FiArrowLeft className="FiLogInMargin" size={16} color="#41414d"/>
                        Voltar para todos os casos
                </Link>
            </div>
            <ul>
              {donors.map(donors => (
                    <li key={donors.id}>
                    <strong>Titulo do caso:</strong>
                    <p>{donors.titulo}</p>
                    <strong>Descrição:</strong>
                    <p>{donors.descricao}</p>
                    <strong>Animal:</strong>
                    <p>{donors.animal}</p>
                    <strong>Sexo do Animal:</strong>
                    <p>{donors.sexo_do_animal}</p>
                    <strong>Tamanho do Animal:</strong>
                    <p>{donors.tamanho_do_animal}</p>
                    <strong>Idade do Animal:</strong>
                    <p>{donors.idade_do_animal}</p>
                                    
                    <button onClick={() => handleDeleteDonors(donors.id)} type="button">
                        <FiTrash2 size={20} color="#392d27" />
                    </button>
                </li>
              ))}
            </ul>
        </div>
    )
}