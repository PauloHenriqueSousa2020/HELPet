import React, { useState, useEffect } from 'react';
import { Link,  useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';
import { FiPower, FiArrowRight } from 'react-icons/fi';
import { phoneMask } from '../Register/mask';
import logoImg from '../../assets/logo.png';

export default function Home() {
    const [donors, setDonors] = useState([]);
    const userName = localStorage.getItem('userName');
    const history = useHistory()

    function handleLogout(){
        localStorage.clear();
        history.push('/')
    }

    useEffect(() => {
        api.get('donors', {}).then(response =>{
            setDonors(response.data)
        })
    }, []);

    return(
        <div className="home-container">
            <header>
                <img className="marginlogo" src={logoImg} alt="HELPet" width="250" height="150"/>   
                <span>Bem vindo(a), {userName}</span>
                <Link className="button " to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#41414d" />
                </button>
            </header>
            <div className="all_incidentes">
                <h1>Todos os casos cadastrados</h1>
                <Link className="back-link justify_item" to="/profile">
                        Ver somente meus casos
                        <FiArrowRight className="FiLogInMargin" size={16} color="#41414d"/>
                </Link>
            </div>
            <ul>
                {donors.map(donors =>(     
                    <li key={donors.id}>          
                        <div className="itens-columns ">              
                            <strong>Titulo do Caso:</strong>
                            <p>{donors.titulo}</p>                                             
                            <strong>Animal:</strong>
                            <p>{donors.animal}</p>                           
                            <strong>Sexo do Animal:</strong>
                            <p>{donors.sexo_do_animal}</p>  
                            <strong>Tamanho do Animal:</strong>
                            <p>{donors.tamanho_do_animal}</p>  
                            <strong>Idade do Animal:</strong>
                            <p>{donors.idade_do_animal}</p>
                            <strong>Doador:</strong>
                            <p>{donors.name}</p>
                            <strong>Numero do Doador:</strong>
                            <p>{phoneMask(donors.whatsapp)}</p>
                            <strong>Email do Doador:</strong>
                            <p>{donors.email}</p>
                            <strong>Cidade do Doador:</strong>
                            <p> {donors.cidade}</p>
                            <strong>Endereço do Doador:</strong>
                            <p> {donors.endereco}</p>
                            <strong>Descrição do Caso:</strong>
                            <p>{donors.descricao}</p>        
                        </div>                        
                    </li>
                ))}  
            </ul>
        </div> 
    )
}