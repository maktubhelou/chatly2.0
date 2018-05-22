import React from 'react';
import { View, Text, TouchableHighlight, Button } from 'react-native';
import styles from '../styles';

const Login = (props) => {
  const { screen, text, button } = styles;
  console.log(props.navigation)
  return(
    <View style={screen}>
      <Text style={text}>Login Page</Text>
      <TouchableHighlight onPress={console.log("Pressed!")}>
        <Text style={button}>Login!</Text>
      </TouchableHighlight>
      />
    </View>
  )
}

export default Login;