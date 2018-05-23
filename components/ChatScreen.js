import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';
import openSocket from 'socket.io-client';

import { GiftedChat } from 'react-native-gifted-chat'

const socket = openSocket('http://localhost:3000');

class ChatScreen extends React.Component {
  constructor(props) {
    super(props);
  
    // Creating the socket-client instance will automatically connect to the server.
    this.socket = socket;
  }

  state = {
    messages: [],
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Welcome to Chatly2.0!',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/b',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({

      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
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

export default ChatScreen;