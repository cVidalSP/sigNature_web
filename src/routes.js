import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/Login.js';
import NewPetition from './pages/Newpetition/NewPetition.js';
import Dashboard from './pages/Dashboard/Dashboard.js';
import Farm from './pages/Farm/Farm.js';

export default function Routes(){
    return(
        <BrowserRouter> 
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/newPetition" exact component={NewPetition} />
                <Route path="/farm" exact component={Farm} />
            </Switch>
        </BrowserRouter>
    );
}