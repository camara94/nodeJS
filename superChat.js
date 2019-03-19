var app = require('express')(),
	server = require('http').createServer(app)
	io = require('socket.io').listen(server),
	ent = require('ent'),
	encode = require('ent/encode');

	app.get('/', function (req, res) {
		res.sendFile(__dirname + '/superChat.html');
	});

	io.sockets.on('connection', function (socket, pseudo) {
		
		socket.on('nouveau_client', function (pseudo) {
			
			pseudo = ent.encode(pseudo);
			socket.pseudo = pseudo;
			socket.broadcast.emit('nouveau_client', pseudo);
		});

		socket.on('message', function (message) {
			message = ent.encode(message);
			socket.broadcast.emit('message', {pseudo: socket.pseudo, message: message});
		});
	});

	server.listen(8080);