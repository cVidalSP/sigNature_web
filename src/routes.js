import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/Login.js';

export default function Routes(){
    return(
        <BrowserRouter> 
            <Switch>
                <Route path="/" exact component={Login} />
            </Switch>
        </BrowserRouter>
    );
}