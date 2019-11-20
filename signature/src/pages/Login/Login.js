import React from 'react';
import localStorage from '../../services/Storage';
import Service from '../../services/BaseAxios';

export default function Login() {
     function login(){
        Service.post('/users/login', { user: '', password: ''}).then(function (value) {
            Service.setHeader(value.data.token);
            localStorage.onSignIn(value.data);
        })
    }

    return (
        <>
        <div>
        </div>
        </>
    );
}

