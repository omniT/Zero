var properties = require('properties').properties;				   //Import properties file
var userModel  = require(properties.path + 'app/src/models/user')	
var bucket  = require(properties.path + 'app/db/dbModel');	       //Import User model.
var crypto  = require('crypto');								   //Import libraries to crypt all the data /* https://nodejs.org/api/crypto.html */	

/*
	Function wraper user to create a bd since model:
*/	
function userDbWrapper(user, callback){
	var userBucket  = new bucket.user();
	userBucket.name = user.getName();
	userBucket.password = user.getPassword();
	callback(userBucket);
}
exports.userDbWrapper = userDbWrapper;

/*
	Function  wrapper user model since db:
*/	
function userModelWrapper(userBucket, callback){
	var user  = new userModel.user();
	user.setName(userBucket.name);
	user.setPassword(userBucket.password);
	callback(user);
}
exports.userModelWrapper = userModelWrapper;


/*
	UserDao prototype 
*/	
function userDao(){

	/*
		Function to create a new user
	*/
	this.createUser = function(user, callback){
		userWrapper(user,function(userBucket){
			userBucket.save(callback);
		});	
	};
}	
exports.userDao = userDao;


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
