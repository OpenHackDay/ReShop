import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import '../assets/sass/index.scss'
import App from './app'
import store from './utils/store'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'

hot(module)(App)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
