var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 //Criando o model
 var VeiculoSchema = new Schema({
 	marca : String,
 	ano : Number,
 	modelo : String,
 	placa : String
 });

 module.exports = mongoose.model('Veiculo', VeiculoSchema)