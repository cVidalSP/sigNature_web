import React, {useState} from 'react';
import { onSignIn, isSignedIn } from '../../services/Storage';
import Service from '../../services/BaseAxios';
import { TextInput, Button } from 'grommet';

export default function Login() {
    const [user, setUser] = useState('andre@gmail.com');
    const [password, setPassword] = useState('123456');

     function login(){
         Service.post('http://localhost:3333/users/login', {email: user, password}).then(result => {
             return {
                 data: result.data,
                 token: result.data.token,
             };
         }).then(values => {
             onSignIn(values.token);
             Service.setHeader(values.token);
             console.log(values)
         }).catch(err => {
             console.log(err);
         }).finally(function () {
             isSignedIn().then(function (res) {
                 console.log(res)
             })
         });
    }

    return (
        <>
            <TextInput
                placeholder="Usuario"
                value={user}
                onChange={event => setUser(event.target.value)}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChange={event => setPassword(event.target.value)}
            />
            <Button
                label="Enviar"
                onClick={login}
            />
        </>
    );
}

