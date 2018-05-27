const express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(server),
  nicknames = [];


server.listen(5000);

console.log('Listening on port 5000');

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
})

io.sockets.on('connection', function(socket) {
  console.log('new user connected', socket.id);
  updateNicknames = () => {
    io.sockets.emit('usernames', nicknames);
  }

  socket.on('new user', function(data, callback) {
    if (nicknames.indexOf(data) != -1) {
      callback(false);
    } else {
      callback(true);
      socket.nickname = data;
      nicknames.push(socket.nickname);
      updateNicknames();
      console.log(nicknames);
    }
  });
  

  socket.on('disconnect', (data) => {
    if(!socket.nickname) return;
    console.log('a user logged off', socket.id);
    nicknames.splice(nicknames.indexOf(socket.nickname), 1);
    updateNicknames();
  });

  socket.on('send message', function(data) {
    console.log(data);
    io.sockets.emit('new message', {msg: data, nick: socket.nickname, createdAt: new Date()});
    console.log('new message: ' + data);
  });

});