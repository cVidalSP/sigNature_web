import React, {useEffect, useState} from 'react';

import Service from '../../services/BaseAxios';


export default function Dashboard(){
    const [data, setData] = useState([]);
    
    function getPetitions() {
        Service.get('http://localhost:3333/petitions').then(function (value) {
            setData(value.data)
        });
    }

    useEffect(() => getPetitions());

    return(
    <div>

    </div>
    )
}

