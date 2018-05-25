import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const middleware = applyMiddleware(ReduxThunk, logger);

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
    case 'SEND_MESSAGE':
      console.log(action);
      const { _id, text, createdAt, user} = action.text[0];
      return state.concat([
        {
          _id,
          text,
          createdAt,
          user,
        }
      ]);
    case 'NEW_MESSAGE':
      if (action.author === "Mark Evans" || action.user === "Mark Evans") {
        return state
      } else {
        return state.concat([
          {
            _id: Math.random()*10000,
            createdAt: action.createdAt,
            text: action.text,
            user: {
              _id: action.author,
            }
          }
        ])
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

export default store = createStore(rootReducer, middleware);