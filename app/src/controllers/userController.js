var properties = require('properties').properties;							//Import properties file
var logger     = require(properties.path + 'utils/logger/logger').logger;	//Import logging library 

var crypto     = require('crypto');	 //Import libraries to crypt all the data /* https://nodejs.org/api/crypto.html */	
var userDAO    = require(properties.path + 'app/src/dao/userDAO');			//Import userDAO funcionality


/*
	UserController prototype
*/
function UserController(){

	/*	
		Create new user, test userName exists
	*/	
	this.createUser = function(){
		userDAO.searchByName(user, function(callback){
			if(callback === null){
				userDAO.createUser(user, password, function(err){
					if(err){
						logger.log('error', "Could not create user " + user.name);
					}
					else{
						logger.log('info', "New user: " + user.name + " has been created");
					}
				});
			}
			else{
				logger.log('warn', 'User ' + user.name + ' already exists');
			}
		});	
	}

		/////TODO//////////////
	/*
		Function to validate an user.
	*/	 
	this.validateUser = function(userName, password, callback){
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
}	
exports.UserController = UserController;
