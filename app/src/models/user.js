/*
	User app model
*/	

var properties  = require('properties').properties;	//Import properties file, and choose properties object
var mongoose    = require('mongoose');
var dbSchema    = require(properties.path + 'app/db/dbSchema')

var User = mongoose.model('user', dbSchema.userSchema);

	User.prototype.setName = function(userName){
		this.name = userName;
	};	      

	User.prototype.setPassword = function(userPassword){
		this.password = userPassword;
	};

	User.prototype.getId = function(){
		return this._id;
	}

	User.prototype.getName = function(){
		return this.name;
	};

	User.prototype.getPassword = function(){
		return this.password;
	}

exports.User = User;