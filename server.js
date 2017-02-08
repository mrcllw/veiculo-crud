var express = require ('express');
var bodyParser = require('body-parser');
var home = require('./app/routes/home');
var veiculos = require('./app/routes/veiculos');
var app = express();
var mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost/webapi', function(erro){
 	if(erro){
 		console.log('Erro ao conectar ao mongodb');
 	};
 	console.log('Conectado ao mongodb');
 });

app.use(bodyParser());

var port = process.env.PORT || 8080;

app.use('/api', home);
app.use('/api/veiculos', veiculos);

app.listen(port, function(){
	console.log('Servidor OK. Porta ' + port);
});