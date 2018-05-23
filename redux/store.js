import React from 'react';
import { createStore } from 'redux';

const userCounter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

export default store = createStore(userCounter);