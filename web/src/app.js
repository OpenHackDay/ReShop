import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Nav';
import About from './pages/about';
import Category from './pages/category';
import LandingPage from './pages/landingPage';
import store from './utils/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route path="/" component={Nav} />
          <Route path="/" exact component={LandingPage} />
          <Route path="/about" component={About} />
          <Route path="/category" component={Category} />
          <Route path="/productDetails" component={Category} />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default hot(module)(App)
