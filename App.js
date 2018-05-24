import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './MainScreen';
import { Provider } from 'react-redux';
import store from './redux/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainScreen />
      </Provider>
    );
  }
}
