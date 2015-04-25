/*
	User app model
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