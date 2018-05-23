import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';
import { connect } from 'react-redux';

class UserListScreen extends React.Component {
  render() {
    const { screen, text, header } = styles;
    return(
      <View style={screen}>
        <Text style={header}>User List</Text>
        <Text style={text}>Logged in: {this.props.counter}</Text>
        <Text style={text}>Total Users: {this.props.total}</Text>
        <Text style={text}>Percentage: {this.props.percentage*100} % </Text>
      </View>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    counter: state.usersLoggedIn,
    total: state.totalUsers,
    percentage: state.usersLoggedIn / state.totalUsers,
  }
}

export default connect(mapStateToProps)(UserListScreen);