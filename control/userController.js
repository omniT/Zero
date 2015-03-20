var userDAO = require('../dao/userDAO');


function createUser(user, password){
	userDAO.searchByName(user, function(callback){
		if(callback === null)
			userDAO.createUser(user, password);		
	});
}


