const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.Server(app);
const io = socketio(server);

server.listen(3001, function() {
  console.log('listening on *:3001');
});

app.get('/', (req, res) => {
  res.send('Hello world\n');
});

io.on('connection', function(socket) {
  socket.on('servo-peace', function(msg) {
     console.log('got servo peace', msg);
  });
});
