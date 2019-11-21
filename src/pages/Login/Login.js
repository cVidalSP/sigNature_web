import React, {useState} from 'react';
import { onSignIn } from '../../services/Storage';
import Service from '../../services/BaseAxios';
import { useHistory } from 'react-router-dom';

export default function Login() {
    const history = useHistory();
    const [user, setUser] = useState('andre@gmail.com');
    const [auth, setAuth] = useState(false);
    const [password, setPassword] = useState('123456');


     function login(){
         Service.post('http://localhost:3333/users/login', {email: user, password}).then(result => {
             return {
                 data: result.data,
                 token: result.data.token,
                 auth: result.data.auth
             };
         }).then(values => {
             setAuth(values.auth);
             onSignIn(values.token);
             Service.setHeader(values.token);
         }).catch(err => {
             console.log(err);
         });

         handleAuth();
     }

     function handleAuth(){
        console.log(auth)
         if(auth){
             history.push('/dashboard')
         }else{
             alert("usuario nao autorizado")
         }
    }

    function handleSubmit(){
        login();
    }

    return (
        <div className="mainContent">
            <p>
                Olá! Seja <strong>bem vindo</strong>
            </p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="user">Usuário</label>
                <input 
                    id="nomeUsuario" 
                    type="text" 
                    placeholder="Nome da petição"
                    value={user}
                    onChange={event => setUser(event.target.value)}
                />

                <label htmlFor="password">Senha</label>
                <input 
                    id="password" 
                    type="text" 
                    placeholder="Descrição da petição"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />

                <button className="btn" type="submit" >Cadastrar</button>

            </form>
        </div> 
    );
}

