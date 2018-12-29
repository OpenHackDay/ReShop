import { applyMiddleware, createStore } from 'redux'
// import reducer from '../reducers'
import productReducer from '../reducers';

export default createStore(productReducer)