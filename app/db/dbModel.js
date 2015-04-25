/*
	File to define user app objects using mongoose library to implement 
	ODM pattern in the application.
*/	

var properties = require('properties').properties;	    //Import properties file, and choose properties object
var mongoose   = require('mongoose');					//Import mongoose library {http://mongoosejs.com}
	mongoose.connect(properties.databaseURI);			//connect mongoose instance to app database
	
/*
	User Model. 
	properties:
		-name: basic UTF8 string
		-Password: It´s saved as a sha256 format.
*/	
var userCollection = mongoose.model('user', mongoose.Schema({
    this.name     : String,
   	this.password : String,
    
}));
exports.userCollection = userCollection;

/*
	Node model.
	Properties:
		-name basic UTF8 String
		-token : it´screated by: username + userpassword + timestamp
*/	
var sigma = mongoose.model('sigma', mongoose.Schema({
	name : String,
    token : String
}));
exports.sigma = sigma;
