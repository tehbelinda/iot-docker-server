const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(http);

app.get('/', (req, res) => {
  res.send('Hello world\n');
});

io.on('connection', function(socket) {
  socket.on('servo-peace', function(msg) {
    io.emit('servo-peace', msg);
  });
});

server.listen(3001, function() {
  console.log('listening on *:3001');
});
