import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App'
import App2 from './App2'

 const Router =() =>(
    <BrowserRouter>
      <Switch>
        <Route  exact path="/" component= {App}/>
        <Route  path="/checkout/" component= {App2}/>
      </Switch>
    </BrowserRouter>
    );

export default Router;