import React, {useEffect, useState} from 'react';
import Service from '../../services/BaseAxios';

export default function Farm(){
    const [data, setData] = useState([]);

    function getAgronegocio() {
        Service.get('http://localhost:3333/getAgronegocio').then(function (value) {
            setData(value.data)
        });
    }

    useEffect(() => getAgronegocio(), []);

    return (
        <>

        </>
    );
}