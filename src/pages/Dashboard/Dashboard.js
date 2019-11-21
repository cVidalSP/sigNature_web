import React, {useEffect, useState} from 'react';

import Service from '../../services/BaseAxios';
import DashboardItem from '../components/DashboardItem/DashboardItem.js';
import './Dashboard.css';

export default function Dashboard(){
    const [petitions, setPetitions] = useState([]);

    useEffect(() => {
        getPetitions()
    }, []);

    function getPetitions() {
        Service.get('http://localhost:3333/petitions').then(function (value) {
            setPetitions(value.data)
        });
    }

    useEffect(() => getPetitions(), []);

    return(
        <div className="mainContent">
            <p>
                Petições ja cadastradas:
            </p>
                <DashboardItem data={petitions} />
        </div>
    )
}

