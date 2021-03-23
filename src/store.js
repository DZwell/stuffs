import { createStore } from 'redux';
import { ADD_STUFF } from './actions/actions';

function stuffReducer(state, action) {
  switch (action) {
    case ADD_STUFF:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export const store = createStore(stuffReducer);