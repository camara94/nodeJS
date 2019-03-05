var http = require('http');
var url = require('url');
var querystring = require('querystring');

var markdown = require( "markdown" ).markdown;
console.log( markdown.toHTML( "Hello *World*!" ) );

var callback = function (req, res) {
	var params = querystring.parse(url.parse(req.url).query);
	res.writeHead(200, {'Content-Type': 'text/html'});
	if('prenom' in params && 'nom' in params)
	{
		res.write('<p>Bonjour Monsieur ' + params.nom + ' ' + params.prenom +'</p>');
	}

	res.end();
}

var server = http.createServer();
server.on('request', callback);

server.listen(8080);

/*var EventEmitter = require('events').EventEmitter;
var msg = require('test');
var jeu = new EventEmitter();
var monmodule = require('monmodule');

monmodule.direBonjour();
monmodule.direByeBye();
/*monmodule.tab.forEach(function (i) {
	console.log('Je m\'appelle : ' + i.nom +'\n');
})*/
/*console.log(monmodule.tab[0].nom);
jeu.on('perdre',function (message) {
	message ;
});

jeu.emit('perdre', msg);*/

/*ar http = require('http');
var url = require('url');
var querystring = require('querystring');


var server = http.createServer();
var callback = function (req, res) {
	res.writeHead(200,{'Content-Type': 'text/html'});
	res.end('Salut tout le monde<br><button id="btn">Eteindre le serveur</button> !');
};

server.on('request', callback);
server.on('request', callback);

server.on('close', function () {
	console.log('Bye bye !!!!');
});


server.listen(8080);*/

//document.getElementById('btn').addEventListener('click',function () {
	//server.close();
//})