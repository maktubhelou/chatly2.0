import React from 'react';
import { View, Text, TouchableHighlight, FlatList, ListItem } from 'react-native';
import styles from '../styles';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { icons } from '../colors.js'

const UserListScreen = ( {counter, userList, dispatch} ) => {
  const { screen, text, header, button, horizontal, user } = styles;
  console.log(counter);
  return(
      <View style={screen}>
        <Text style={header}>User List</Text>
        <Text style={text}>Logged in: {userList.length}</Text>
        <View style={horizontal}>
          <FlatList 
            data={userList}
            renderItem={({item}) => (
              <Text style={user}>{item}</Text>
            )}
          />
          {/* <TouchableHighlight onPress={() => dispatch( {type: 'INCREMENT'})} >
            <Ionicons style={text} name={'ios-add-circle'} size={50} color={icons} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => dispatch( {type: 'DECREMENT'})} >
            <Ionicons style={text} name={'ios-remove-circle'} size={50} color={icons} />
          </TouchableHighlight> */}
        </View>
      </View>
    )
  }

const mapStateToProps = (state, props) => {
  return {
    // counter: state.userCounter,
    userList: state.userList,
  }
}

export default connect(mapStateToProps)(UserListScreen);