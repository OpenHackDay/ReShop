import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import '../sass/index.scss'
import App from './App'
import store from './utils/store'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader/root'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

hot(App)
