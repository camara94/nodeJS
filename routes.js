/*var morgan = require('morgan'); // Charge le middleware de logging
var favicon = require('serve-favicon'); // Charge le middleware de favicon

var app = express();

app.use(morgan('combined')) // Active le middleware de logging
.use(express.static(__dirname + '/public')) // Indique que le dossier /public contient des fichiers statiques (middleware chargé de base)
.use(favicon(__dirname + '/public/favicon.ico')) // Active la favicon indiquée
.use(function(req, res){ // Répond enfin
    res.send('Hello');
});

app.listen(8080);*/
var express = require('express');

var app = express();

app.get('/', function (req, res) {
	res.setHeader('Content-Type', 'text/html');

	res.send('<em>Vous</em> êtes à <strong>l\'accueil</strong>, que puis-je faire pour vous ?');
});

app.get('/sous-sol', function (req, res) {
	res.setHeader('Content-Type', 'text/html');

	res.send('Vous êtes à la <em>cave à vins</em>, ces bouteilles sont à <b>moi</b>');
});

app.get('/etage/:etagenum/chambre', function(req, res) {
    ///res.setHeader('Content-Type', 'text/html');
    res.render('chambre.ejs',{etage: req.params.etagenum});
});

app.get('/compter/:nombre', function (req, res) {
	var noms = ['Robert','Jacques', 'David'];
	res.render('page.ejs',{compteur: req.params.nombre, noms: noms});
});

app.use(function (req, res, next) {
	res.setHeader('Content-Type', 'text/html');

	res.status(404).send('<strong style="color:red">Page introuvable !</strong>');
});


app.listen(8080);
