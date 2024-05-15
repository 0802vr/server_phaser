const express = require('express');
const cors = require('cors');

const PORT = 8081;

const app = express()
var server = require("http").createServer(app);

let io = require('socket.io')(server, {'pingInterval': 2000, 'pingTimeout': 5000});

app.use(cors())

var players = {};
var star = {
  x: Math.floor(Math.random() * 700) + 50,
  y: Math.floor(Math.random() * 500) + 50
};
var scores = {
  blue: 0,
  red: 0
};

 app.use(express.static(__dirname + '/dist'));

/* app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
}); */

io.on('connection', function (socket) {
  console.log('подключился пользователь', socket.id);
  // создание нового игрока и добавление го в объект players
  players[socket.id] = {
    rotation: 0,
    x: Math.floor(Math.random() * 700) + 50 ,
    y:  650,
    playerId: socket.id,
    team:1
  };
  // отправляем объект players новому игроку
  socket.emit('currentPlayers', players);
  socket.emit('starLocation', star);
// отправляем текущий счет
  socket.emit('scoreUpdate', scores);
  // обновляем всем другим игрокам информацию о новом игроке
  socket.broadcast.emit('newPlayer', players[socket.id]);


  socket.on('disconnect', function () {
    console.log('пользователь отключился');
    // удаляем игрока из нашего объекта players
    delete players[socket.id];
    // отправляем сообщение всем игрокам, чтобы удалить этого игрока
    socket.broadcast.emit('player-disconnect', socket.id);
  });
  socket.on("send message", function(data){
        console.log(data);
        io.sockets.emit("new message", data);
    })
  socket.on('playerMovement', function (movementData) {
    players[socket.id].x = movementData.x;
    players[socket.id].y = movementData.y;
    players[socket.id].rotation = movementData.rotation;
    // отправляем общее сообщение всем игрокам о перемещении игрока
    socket.broadcast.emit('playerMoved', players[socket.id]);
  });
  socket.on('starCollected', function () {
    if (players[socket.id].team === 'red') {
      scores.red += 10;
    } else {
      scores.blue += 10;
    }
    star.x = Math.floor(Math.random() * 700) + 50;
    star.y = Math.floor(Math.random() * 500) + 50;
    io.emit('starLocation', star);
    io.emit('scoreUpdate', scores);
  });
});


server.listen(PORT, function () {
  console.log(`Прослушиваем ${server.address().port}`);
});
