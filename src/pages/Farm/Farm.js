import React, { useEffect } from 'react';
import Service from '../../services/BaseAxios';

export default function Farm(){
    function getAgronegocio() {
        Service.get('http://localhost:3333/getAgronegocio').then(function (value) {
            console.log(JSON.stringify(value))
            alert(JSON.stringify(value))
        });
    }

    useEffect(() => getAgronegocio());

    return (
        <>

        </>
    );
}