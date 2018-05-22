import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

const UserListScreen = () => {
  const { screen, text } = styles;
  return(
    <View style={screen}>
      <Text style={text}>User List</Text>
    </View>
  )
}

export default UserListScreen;