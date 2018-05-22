import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import ChatScreen from './ChatScreen';
import UserListScreen from './UserListScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default createBottomTabNavigator(
  {
  Chat: ChatScreen,
  Users: UserListScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Chat') {
          iconName = `ios-chatbubbles${focused ? '' : '-outline'}`;
        } else if (routeName === 'Users') {
          iconName = `ios-people${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#7789aa',
      inactiveTintColor: '#cccccc',
    },
  }
);