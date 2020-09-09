import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import { FiArrowLeft } from 'react-icons/fi';
import './styles.css'
import logoImg from '../../assets/logo.png';

export default function NewIncident(){
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [animal, setAnimal] = useState('');
    const [sexo_do_animal, setSexo_do_animal] = useState('');
    const [tamanho_do_animal, setTamanho_do_animal] = useState('');
    const [idade_do_animal, setIdade_do_animal] = useState('');

    const userID = localStorage.getItem('userID')
    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault();
        const data = {
            titulo,
            descricao,
            animal,
            sexo_do_animal,
            tamanho_do_animal,
            idade_do_animal
        };
        try {
            await api.post('donors', data, {
                headers: {
                    Authorization: userID,
                }
            })
            history.push('/home')
        }catch (err) {
            alert('Erro ao cadastrar caso, tente novamente.')
        }
    }

    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                <img className="marginlogo" src={logoImg} alt="HELPet" width="350" height="250"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Cadastre o caso detalhadamente para encontrar um lar para esse PET!</p>
                    
                    <Link className="back-link" to="/home">
                        <FiArrowLeft className="FiLogInMargin" size={16} color="#41414d"/>
                        Voltar para home
                    </Link>

                </section>

                <form onSubmit={handleNewIncident}> 
                    <input  
                        placeholder = "Titulo do caso"
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                    />
                    <textarea 
                        placeholder = "Descrição" 
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                    />
                    <input 
                        placeholder = "Animal (Ex: Gato ou Cachorro)" 
                        value={animal}
                        onChange={e => setAnimal(e.target.value)}
                    />
                    <input 
                        placeholder = "Sexo do Animal"  
                        value={sexo_do_animal}
                        onChange={e => setSexo_do_animal(e.target.value)}
                   />
                    <input 
                        placeholder = "Tamanho do Animal" 
                        value={tamanho_do_animal}
                        onChange={e => setTamanho_do_animal(e.target.value)}
                    />
                    <input 
                        placeholder = "Idade do Animal"
                        value={idade_do_animal}
                        onChange={e => setIdade_do_animal(e.target.value)}
                    />           
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}