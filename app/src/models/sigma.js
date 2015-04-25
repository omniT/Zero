/*
	File to define sigma app objects using mongoose library to implement 
	ODM pattern in the application.
*/	

var properties = require('properties').properties;		//Import properties file, and choose properties object
var mongoose   = require('mongoose');						//Import mongoose library {http://mongoosejs.com}
	mongoose.connect(properties.databaseURI);			//connect mongoose instance to app database
	

/*
	Node model.
	Properties:
		-name basic UTF8 String
		-token : it´screated by: username + userpassword + timestamp
*/	
function sigma(){
	name : String;
    token : String;

    this.setName = function(sigmaName){
    	name = sigmaName;
    }

    this.setToken = function(sigmaToken){
    	token = sigmaToken;
    }

    this.getName = function(){
    	return name;
    }

    this.getToken = function(){
    	return token;
    }
} 
exports.sigma = sigma;


