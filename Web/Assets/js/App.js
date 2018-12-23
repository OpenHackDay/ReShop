import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LandingPage from './views/LandingPage'
import Nav from './components/Nav'
import About from './views/About'
import Listing from './views/Listing';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={Nav} />
        <Route path="/" exact component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path="/listing" exact component={Listing} />
      </div>
    </BrowserRouter>
  )
}

export default App
