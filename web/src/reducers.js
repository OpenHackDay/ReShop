import { combineReducers } from 'redux'
import { ADD_PRODUCT, REMOVE_PRODUCT, GET_PRODUCTS } from './actions'

const initialState = {}

export function productReducer (state = initialState, action) {
  if (action.type === ADD_PRODUCT) {
    return Object.assign({}, state, { products: [ ...state.products, action.name ] })
  }

  if (action.type === REMOVE_PRODUCT) {
    state.products.pop()
    // return Object.assign({}, state)
    return { ...state }
  }
  if (action.type === GET_PRODUCTS) {
    // return Object.assign({}, state)
    return {
      ...state,
      products: { ...action.products }
    }
  }

  return state
}
