import React from 'react';
import { View, Text, TouchableHighlight, Button } from 'react-native';
import styles from '../styles';

class Login extends React.Component {
  render() {
    const { screen, text, button } = styles;
    return(
      <View style={screen}>
        <Text style={text}>Login Page</Text>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('NavScreen')}>
          <Text style={button}>Login!</Text>
        </TouchableHighlight>
        />
      </View>
    )
  }
}

export default Login;
