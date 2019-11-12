//este arquivo é responsável pela conexão e estrutura do  banco de dados 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/trabweb2');

var userSchema = new mongoose.Schema({
	username: String,
	email: String,
	cpf: String
	//pass: array[8]
	//cpf: varchar[11],
	//pass: varchar[8]

}, {collection: 'usercollection'}
); 

module.exports = {Mongoose: mongoose, UserSchema: userSchema}
