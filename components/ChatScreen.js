import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';
import openSocket from 'socket.io-client';
import { connect } from 'react-redux';
import { GiftedChat } from 'react-native-gifted-chat'
import { sendMessage } from '../redux/actions';
import { newMessage } from '../redux/actions';

export const socket = openSocket('http://localhost:5000');

class ChatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.socket = socket;
  }

  componentWillMount() {
    dispatch = this.props.dispatch;
    socket.emit('new user', 'Mark Evans', function(data){
    });
    socket.on('new message', function(data){
      dispatch( {type: 'NEW_MESSAGE', text: data.msg, user: data.nick, createdAt: data.createdAt })
    });
    socket.on('usernames', function(data){
      dispatch( {type: 'UPDATE_LIST', data} );
    })
  }
  
  onSend(messages) {
    messageText = messages[0].text;
    socket.emit('send message', messageText);
    console.log(this.props);
    this.props.dispatch({ type: 'SEND_MESSAGE', text: messages })
  }

  render() {
    return (
      <GiftedChat
        messages={this.props.messageBox}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    messageBox: state.messageBox,
  }
}

export default connect(mapStateToProps)(ChatScreen);