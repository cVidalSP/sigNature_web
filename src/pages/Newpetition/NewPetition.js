import React, { useState } from 'react';
import { TextInput, Button } from 'grommet';
import Service from '../../services/BaseAxios';

export default function NewPetition(){
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [qtAss, setQtAss] = useState(0);
    const [image, setimage] = useState('');

    function setPetition() {
        Service.post('http://localhost:3333/petitions', { name, desc, qtAss, image}).then(function (value) {
            alert(JSON.stringify(value))
        });
    }

    return (
        <>
        <TextInput
            placeholder="Nome da petição"
            value={name}
            onChange={event => setName(event.target.value)}
            />
            <TextInput
            placeholder="Descrição da petição"
            value={desc}
            onChange={event => setDesc(event.target.value)}
            />
            <TextInput
            placeholder="Quantidade de assinaturas, default: 0"
            value={qtAss}
            onChange={event => setQtAss(event.target.value)}
            />
            <TextInput
            placeholder="Imagem de exemplo"
            value={image}
            onChange={event => setimage(event.target.value)}
            />
            <Button
                label="Enviar"
                onClick={setPetition}
            />
        </>
    );
}