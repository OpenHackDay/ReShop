import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Nav from './Nav';
import About from './About';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={props =><div><Nav /><App /></div>} />
        <Route path="/about" exact render={props =><div><Nav /><About /></div>} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
