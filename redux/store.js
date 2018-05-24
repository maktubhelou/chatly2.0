import React from 'react';
import { createStore, combineReducers } from 'redux';



const initialMessages = [
  {
    _id: 1,
    text: "Welcome to Chatly2.0! How's it going my friend?",
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/c',
    },
  },
];

const messageBox = (state = initialMessages, action) => {
  switch(action.type) {
    case 'NEW_MESSAGE':
      return {
        state: state.concat(action.data),
      }
    default:
      return state;
  }
}

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

const rootReducer = combineReducers({
  userCounter,
  messageBox,
})

export default store = createStore(rootReducer);