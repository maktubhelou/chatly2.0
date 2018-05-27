import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const middleware = applyMiddleware(ReduxThunk, logger);

const initialMessages = [
  {
    _id: 2,
    text: "Welcome to Chatly2.0! How's it going my friend?",
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/c',
    },
  },
];

const initialUserList = [
  'No users logged in',
]

const userList = (state = initialUserList, action) => {
  switch(action.type) {
    case 'UPDATE_LIST':
      let updatedList = action.data.toString().split(',');
      return updatedList;
    default:
      return state;
  }
}


const messageBox = (state = initialMessages, action) => {
  switch(action.type) {
    case 'SEND_MESSAGE':
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
              _id: action.user,
              name: action.user,
            }
          }
        ])
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  messageBox,
  userList,
})

export default store = createStore(rootReducer, middleware);