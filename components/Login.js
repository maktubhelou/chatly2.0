import React from 'react';
import { View, Text, TouchableHighlight, TextInput, Button } from 'react-native';
import styles from '../styles';

class Login extends React.Component {
  render() {
    const { screen, text, button, textInput } = styles;
    return(
      <View style={screen}>
        <Text style={text}>Welcome to Chatly 2.0</Text>
        <TextInput style={textInput} placeholder="Name..."/>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('NavScreen')}>
          <Text style={button}>Login!</Text>
        </TouchableHighlight>
        />
      </View>
    )
  }
}

export default Login;
