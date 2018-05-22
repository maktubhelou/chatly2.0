import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from "./components/Login";
import NavScreen from "./components/NavScreen";

const MainScreen = createStackNavigator(
  {
  Home: {screen: Login},
  NavScreen: {
    screen: NavScreen,
  },
},
{
  //headerMode: 'none',
  initialRouteName: 'NavScreen',
  }
);

export default MainScreen;
