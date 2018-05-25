// removed from chatscreen
socket.on('new message', (data) => this.updateMessage(data));
this.setState({
  messages: this.props.messageBox,
})



