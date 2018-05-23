import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './MainScreen';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const userList = {
  totalUsers: 20,
  usersLoggedIn: 10,
  usersTyping: 5,
}

const counter = (state = userList, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counter);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainScreen />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
