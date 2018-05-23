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
  header: {
    fontSize: 40,
    padding: 20,
    marginBottom: 20,
    color: '#7789aa',
    backgroundColor: '#ddeeff',
  },
  button: {
    fontSize: 32,
    color: '#7789aa',
    backgroundColor: '#ddeeff',
    marginTop: 100,
    padding: 20,
    shadowColor: '#221144',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 25,
    shadowOpacity: 1.0
  }
})