var model = require('../model/mongoSchema');
var crypto = require('crypto');
var sha = crypto.createHash('sha256');

/*
	Function to create a new user
*/
function createUser(name, pass) {	
	sha.update(pass);
	var user = new model.user();
	user.name = name;
	user.password = sha.digest();
	user.save();
	
}
exports.createUser = createUser;

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