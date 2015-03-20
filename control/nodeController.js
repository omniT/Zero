var nodeDAO = require('../dao/nodeDAO');
var userDAO = require('../dao/userDAO');

function createNode(user, nodeName){
	userDAO.searchByName(user.name, function(result){
		if(result === null){
			//TODO: log.
			console.log('User does not exist.');
		}
		else{
			userDAO.validateUser(user.name, user.password, function(valid){
				if (valid){
					nodeDAO.createNode(user, nodeName);
				}
				else{
					//TODO: log.
					console.log('Authentication error.')
				}
			});
		}
	});
}