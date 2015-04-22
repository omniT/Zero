var properties = require('properties').properties;							//Import properties file
var userDAO    = require(properties.path + 'app/src/dao/userDAO');			//Import userDAO funcionality
var logger     = require(properties.path + 'utils/logger/logger').logger;	//Import logging library 

function createUser(user, password){
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
exports.createUser = createUser;


