import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/Login.js';
import NewPetition from './pages/Newpetition/NewPetition.js';
import Dashboard from './pages/components/DashboardItem/DashboardItem.js';

export default function Routes(){
    return(
        <BrowserRouter> 
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/newPetition" exact component={NewPetition} />
                <Route path="/dashboard" exact component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
}