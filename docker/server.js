const express = require('express');
const http = require('http');

const app = express();
const server = http.Server(app);

// Keep track of servo peace state
let peaceful = false;

server.listen(3001, function() {
  console.log('listening on *:3001');
});

app.get('/', (req, res) => {
  res.send('Hello world<br/>\nPeaceful: ' + peaceful);
});

app.get('/peace', (req, res) => {
  res.json({peaceful});
});

app.post('/peace', (req, res) => {
  if (req.query.peace == 1) {
    peaceful = true;
    res.sendStatus(200);
  } else if (req.query.peace == 0) {
    peaceful = false;
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});
