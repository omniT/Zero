var nodeDAO = require('../dao/nodeDAO');
var userDAO = require('../dao/userDAO');

function createNode(user, nodeName){
	userDAO.searchByName(user.name, function(result){
		if(result === null){
			//TODO: log.
			console.log('User does not exist.');
		}
		else{
			nodeDAO.createNode(user, nodeName);	
		}
	});
}