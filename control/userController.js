var userDAO = require('../dao/userDAO');
var logger = require('../utils/logger').logger;

function createUser(user, password){
	userDAO.searchByName(user, function(callback){
		if(callback === null){
			userDAO.createUser(user, password);
			logger.log('info', "New user: " + user.name + " has been created");
		}
		else{
			logger.log('error', 'User ' + user.name + ' already exists');
		}
	});
}


