import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Nav from './components/Nav'
import About from './pages/About'
import Category from './pages/Category';

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