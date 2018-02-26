import { createStore, combineReducers } from 'redux';
import ACTIONS from '../constants/actions'

const initialState = {
}

const countReducer = (state = 0, action) => {

switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state;
}

}

const listReducer = (state = [], action) => {

switch (action.type) {
  case 'ADD':
    return [...state, 1]
  case 'REMOVE':
    return [...state.slice(0, state.length-1)]
  default:
    return state;
}

}


const rootReducer = (state = {}, action) => {

  switch (action.type) {
    default:
      return combineReducers({
        counter: countReducer,
        list: listReducer
      })(state, action)

    //   return {
    //   ...state,
    //   counter: countReducer(state.counter, actions),
    //   list: listReducer(state.list, actions)
    // };
  }
}


const store = createStore(rootReducer, initialState);

export default store;
