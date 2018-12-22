import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Nav from './Nav';
import About from './About';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Nav} />
        <Route path="/" component={App} exact />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
