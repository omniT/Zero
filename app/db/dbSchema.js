/*
	File to define user app objects using mongoose library to implement 
	ODM pattern in the application.
*/
	
var mongoose  = require('mongoose');					//Import mongoose library {http://mongoosejs.com}

/*
	User Model. 
	properties:
		-name: basic UTF8 string
		-Password: It´s saved as a sha256 format.
*/	
var userSchema  = new mongoose.Schema({
    name     : { type: String, required: true, unique: true },
   	password : { type: String, required: true,},
    
});
exports.userSchema = userSchema;

/*
	Node model.
	Properties:
		-name basic UTF8 String
		-token : it´screated by: username + userpassword + timestamp
*/	
var sigmaSchema = new mongoose.Schema({
	name  : { type: String, required: true, unique: true },
    token : { type: String, required: true},
});
exports.sigmaSchema = sigmaSchema;
