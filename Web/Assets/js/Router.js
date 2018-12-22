import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './Components/App';
import Nav from './Components/Nav';
import About from './Components/About';

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={Nav} />
        <Route path="/" exact component={App} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default Router;
