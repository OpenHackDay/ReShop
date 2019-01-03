import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import { productReducer } from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middlewares = [thunk]

export default createStore(
  productReducer,
  composeEnhancers(applyMiddleware(...middlewares))
)
