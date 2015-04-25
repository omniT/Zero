/*
	File to define user app objects using mongoose library to implement 
	ODM pattern in the application.
*/	

var properties = require('properties').properties;	//Import properties file, and choose properties object
var mongoose   = require('mongoose');						//Import mongoose library {http://mongoosejs.com}
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