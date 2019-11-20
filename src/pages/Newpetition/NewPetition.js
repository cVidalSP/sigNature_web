import React, { useState } from 'react';
// import { TextInput, Button } from 'grommet';
import Service from '../../services/BaseAxios';

import './NewPetition.css';

export default function NewPetition(){
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setimage] = useState('');

    function setPetition() {
        Service.post('http://localhost:3333/petitions', { name, desc, image}).then(function (value) {
            alert(JSON.stringify(value))
        });
    }

    function handleSubmit(){

    }

    return (
        <div className='mainContent'> 
            <p>
            Cadastre uma nova <strong>petição</strong>.
            </p>

            <form onSubmit={handleSubmit}>

                <label htmlFor="nomePeticao">Nome da petição *</label>
                <input 
                    id="nomePeticao" 
                    type="text" 
                    placeholder="Nome da petição"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />

                <label htmlFor="descricao">Descrição *</label>
                <input 
                    id="descricao" 
                    type="text" 
                    placeholder="Descrição da petição"
                    value={desc}
                    onChange={event => setDesc(event.target.value)}
                />

                <label htmlFor="imagem">URL da imagem *</label>
                <input 
                    id="imagem" 
                    type="text" 
                    placeholder="URL"
                    value={image}
                    onChange={event => setimage(event.target.value)}
                />

                <button className="btn" type="submit">Cadastrar</button>
            </form>
        </div>
    );
}