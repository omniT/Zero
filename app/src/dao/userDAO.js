var properties = require('properties').properties;				//Import properties file
var crypto  = require('crypto');									//Import libraries to crypt all the data /* https://nodejs.org/api/crypto.html */	
var bucket  = require(properties.path + 'app/db/dbModel');	    //Import User model.

/*
	Function to wraper user to bd model:
*/	
function userWrapper(user, callback){
	var userBucket  = new bucket.user();
	userBucket.name = user.getName();
	userBucket.password = user.getPassword();
	callback(userBucket);
}
exports.userWrapper = userWrapper;


/*
	Function to create a new user
*/
function createUser(name, pass, callback) {	
	var user = new model.user();
	user.password = crypto.createHash('sha256').update(pass).digest();
	user.name = name;
	user.save(callback);	
}	
exports.createUser = createUser;

/*
	Function to validate an user.
*/	 
function validateUser(name, pass, callback){
	passw = crypto.createHash('sha256').update(pass).digest();
	model.user.findOne({ 'name':  name }, 'name password', function (err, user){
		if (err){
			return callback(undefined);
		}
		else{
			if (user.password === passw.toString()) return callback(true);
			else return callback(false);
		}
	});
}
exports.validateUser = validateUser;

/*
	Function to find an user with their name
*/
function searchByName(name, callback){ 			
	model.user.findOne({ 'name':  name }, 'name password', function (err, user) {	  	
	  	if (err){
	   		return callback(undefined);
	  	}
	  	else{
  			return callback(user);
	  	}
	});
}	
exports.searchByName = searchByName;
