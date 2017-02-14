var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function (req, res) {
  res.sendFile(__dirname +'/index.html');
});

io.on('connection', function(socket) {
  // kalau ada chat baru
  socket.on('newMessages', function(msg) {
    io.emit('newMessages', msg);
    console.log('Chat baru : ' + msg);
  });

  // kalau ada yang disconnect
  socket.on('disconnect', function(msg) {
    console.log('User disconnected');
  });
});

http.listen(3000, function() {
  console.log('listen on 3000 ...');
});
