var nodeDAO = require('../dao/nodeDAO');
var userDAO = require('../dao/userDAO');
var logger = require('../utils/logger').logger;

function createNode(user, nodeName){
	userDAO.searchByName(user.name, function(result){
		if(result === null){
			logger.log('error', 'User ' + user.name + ' does not exist.');
		}
		else{
			userDAO.validateUser(user.name, user.password, function(valid){
				if (valid){
					nodeDAO.createNode(user, nodeName, function(err){
						if(err){
							logger.log('error', "Could not create node " + nodeName + " with user " + user.name);
						}
						else{
							logger.log('info', 'New node ' + nodeName + ' has been created with user ' + user.name);
						}
					});
				}
				else{
					logger.log('error', 'Authentication error creating node ' + nodeName + ' with user ' + user.name);
				}
			});
		}
	});
}