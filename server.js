const express = require('express');
const cors = require('cors');
/* const fs = require('fs'); */
const bodyParser = require('body-parser');
/* const path = require('path'); */
const { exec } = require('child_process');
/* const request = require('request'); */
const PORT = 8081;
const fs = require('fs');
const http = require('http');

 


const app = express()
var server = require("http").createServer(app);

let io = require('socket.io')(server, {'pingInterval': 2000, 'pingTimeout': 5000});

app.use(cors())

const players = {};
var star = {
  x: Math.floor(Math.random() * 700) + 50,
  y: Math.floor(Math.random() * 500) + 50
};
var scores = {
  blue: 0,
  red: 0
};

app.use(express.static(__dirname + '/dist'));

app.use(bodyParser.json());
/* app.use(bodyParser.urlencoded({ extended: false })); */

app.post('/mail.php', (req, res) => {
  const { useremail, username, password } = req.body;
  
  const postData = JSON.stringify({ useremail, username, password });

  const options = {
    hostname: '5.35.87.68',
    path: '/mail.php',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  const httpRequest = http.request(options, (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      console.log(data);
    });
  });

  httpRequest.on('error', (error) => {
    console.error(error);
  });

  httpRequest.write(postData);
  httpRequest.end();
});
/* app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
}); */

io.on('connection', function (socket) {
  console.log('подключился пользователь', socket.id);
    players[socket.id] = {}
    players[socket.id].x = Math.floor(Math.random() * 700) + 50;
    players[socket.id].y = 650;
    players[socket.id].playerId = socket.id;

  socket.on("playerName", function(data){
    console.log(data);    
    players[socket.id].name = data;
    socket.emit('currentPlayers', players);
    socket.broadcast.emit('newPlayer', players[socket.id]);
    console.log(players)
    
   /*  io.sockets.emit("updatePlayer",players[socket.id]); */
})
  // создание нового игрока и добавление го в объект players
  
    
  // отправляем объект players новому игроку
  
  socket.emit('starLocation', star);
// отправляем текущий счет
  socket.emit('scoreUpdate', scores);
  // обновляем всем другим игрокам информацию о новом игроке
  


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
