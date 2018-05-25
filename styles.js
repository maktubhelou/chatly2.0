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
    padding: 15,
    color: '#ffffff',
  },
  textInput: {
    width: '80%',
    padding: 10,
    fontSize: 20,
    backgroundColor: '#ffffff',
    textAlign: 'center',
  },
  header: {
    fontSize: 40,
    padding: 20,
    marginBottom: 20,
    color: '#7789aa',
    backgroundColor: '#ddeeff',
  },
  horizontal: {
    flexDirection: 'row',
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
  },
  user: {
    fontSize: 16,
    color: '#7789aa',
    backgroundColor: '#ddeeff',
    marginTop: 2,
    padding: 4,
    shadowColor: '#221144',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  }
})