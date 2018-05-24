import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';
import openSocket from 'socket.io-client';
import { connect } from 'react-redux';
import { GiftedChat } from 'react-native-gifted-chat'

const socket = openSocket('http://localhost:5000');

class ChatScreen extends React.Component {
  constructor(props) {
    super(props);
    
    // Creating the socket-client instance will automatically connect to the server.
    this.socket = socket;
  }
  
  state = {
    user: 'Mark Evans',
    messages: [],
  }
  
  componentWillMount() {
    socket.emit('new user', 'Mark Evans', function(data){
      console.log('willmount:' + data);
    });
    this.setState({
      messages: this.props.messageBox,
    })
  }
  
  onSend(messages = []) {
    messageText = messages[0].text;
    socket.emit('send message', messageText);
    this.setState(previousState => ({

      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }


  render() {
    console.log('messageBox:' + this.props.messageBox);
    socket.on('new message', () => console.log('message received'));
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
}

const mapStateToProps = (state, props) => {
  console.log(state);
  return {
    messageBox: state.messageBox,
  }
}

export default connect(mapStateToProps)(ChatScreen);