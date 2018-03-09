import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-rputer-dom';
import App from './App'

const Router =() =>(
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={App} ></Route>
        </Switch>
        </BrowserRouter>
    );

    export default Router;