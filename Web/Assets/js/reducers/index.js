import { combineReducers } from "redux";

const initialState = {
  visibilityFilter: 'hamoo',
  todos: []
}

function product(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }


  // For now, don't handle any actions
  // and just return the state given to us.
  return state
}
export default product