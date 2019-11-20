import React, { useEffect, useState } from 'react';

import Service from '../../services/BaseAxios';
import DashboardItem from '../components/DashboardItem/DashboardItem.js';
import './Dashboard.css';

export default function Dashboard(){

    const [petitions, setPetitions] = useState([]);
    const data = [
            {
                "id": 23,
                "name": "Desastre na Amazônia ",
                "desc": "Petição com o objetivo de adquirir recursos para o reflorestamento na área devastada pelas chamas na Amazônia",
                "qtAss": 0,
                "image": "https://amazoniareal.com.br/wp-content/uploads/2019/08/Segundo-protesto-em-defesa-da-Amaz%C3%B4nia-em-Manaus-Foto-Alberto-C%C3%A9sar-Ara%C3%BAjo-Amaz%C3%B4nia-Real-47.jpg",
                "createdAt": "2019-11-19T01:16:08.540Z",
                "updatedAt": "2019-11-19T01:16:08.540Z"
            },
            {
                "id": 24,
                "name": "Salve as tartarugas",
                "desc": "Petição para auxilio da redução dos residuos de plásticos nos mares, onde o alvo maior das tartarugas são os plásticos ",
                "qtAss": 0,
                "image": "https://s2.glbimg.com/qlcENQwmDHwt_WYlYxBUVJd5oGk=/e.glbimg.com/og/ed/f/original/2018/12/10/tartaruga334.jpg",
                "createdAt": "2019-11-19T01:26:15.855Z",
                "updatedAt": "2019-11-19T01:26:15.855Z"
            },
            {
                "id": 25,
                "name": "Caça das Baleias",
                "desc": "Petição para proibir a caça das baleias  ",
                "qtAss": 0,
                "image": "https://meioambiente.culturamix.com/blog/wp-content/gallery/a-caca-de-baleias-2/Como-Funciona-a-Caca-as-Baleias-4.jpg",
                "createdAt": "2019-11-19T02:16:03.656Z",
                "updatedAt": "2019-11-19T02:16:03.656Z"
            }
            ]
        

    useEffect(() => {
        getPetitions()
    }, []);

    function getPetitions() {
        setPetitions(data);
        console.log('entrei');
    }

    return(
        <div className="mainContent">
            <p>
                Petições ja cadastradas:
            </p>
            {petitions.map(item => (
                <DashboardItem />
            ))}
        </div>
    )
}

