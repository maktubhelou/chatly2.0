import React from 'react';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7789aa',
  },
  text: {
    fontSize: 20,
    color: '#ffffff',
  },
  button: {
    fontSize: 32,
    color: '#7789aa',
    backgroundColor: '#ffffff',
    marginTop: 20,
    padding: 20,
    shadowColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  }
})