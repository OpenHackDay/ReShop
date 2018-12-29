import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage'
import Nav from './components/Nav'
import About from './pages/about'
import Category from './pages/category';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={Nav} />
        <Route path="/" exact component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path="/category" component={Category} />
      </div>
    </BrowserRouter>
  )
}

export default App