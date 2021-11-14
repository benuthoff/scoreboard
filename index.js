// Scoreboard
// Written by Ben Uthoff

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(server);

app.use(express.static('client'));
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/client/index.html');
});

server.listen(5555, () => {
    console.log('listening on *:5555');
});


var score = {
	'home': 0,
	'away': 0
}


io.on('connection', (socket) => {

	socket.emit('score', score.home, score.away);

	socket.on('score_change', (x, y)=>{
		score.home = x; score.away = y;
		io.emit('score', x, y);
	});

});