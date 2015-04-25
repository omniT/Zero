/*
	File to define user app objects using mongoose library to implement 
	ODM pattern in the application.
*/	

var properties  = require('properties').properties;	//Import properties file, and choose properties object

function user(){
    name :  String;
    password : String;

	this.setName = function(userName){
		name = userName;
	}

	this.setPassword = function(userPassword){
		password = userPassword;
	}

	this.getName = function(){
		return name;
	}

	this.getPassword = function(){
		return password
	}  
}
module.exports.user = user;