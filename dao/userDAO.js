var model  = require('../model/mongoSchema');
var crypto = require('crypto');

/*
	Function to create a new user
*/
function createUser(name, pass) {	
	var user = new model.user();
	user.password = crypto.createHash('sha256').update(pass).digest();
	user.name = name;
	user.save();	
}
exports.createUser = createUser;

/*
	Function to validate an user.
*/	 
function validateUser(name, pass, callback){
	passw = crypto.createHash('sha256').update(pass).digest();
	model.user.findOne({ 'name':  name }, 'name password', function (err, user){
		if (err){
			//TODO log.
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
	  	if (err)
	  		//TODO log.
	   		return callback(undefined);
	  	else
	  		//console.log(user);
  			return callback(user);
	  		
	});
}	
exports.searchByName = searchByName;