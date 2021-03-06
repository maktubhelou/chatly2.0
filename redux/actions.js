export const sendMessage = (text) => {
  return {
    type: 'SEND_MESSAGE',
    text
  }
}

export const newMessage = (message, author) => {
  return {
    type: 'NEW_MESSAGE',
    text: message,
    author: author,
  }
}

export const updateList = () => {
  return {
    type: 'UPDATE_LIST',
    data,
  }
}