import { combineReducers } from 'redux'
import { ADD_PRODUCT, REMOVE_PRODUCT } from './actions'

const initialState = {
  products: [ 'kahvetin', 'aperin', 'sanaks', 'hhh', 'asdfasdfasdf', 'asd', 'fak', 'takotako']
}

function productReducer (state = initialState, action) {
  if (action.type === ADD_PRODUCT) {
    return Object.assign({}, state, { products: [ ...state.products, action.name ] })
  }

  if (action.type === REMOVE_PRODUCT) {
    state.products.pop()
    return Object.assign({}, state)
  }

  return state
}

export default productReducer
