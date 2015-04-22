var properties = require('properties').properties;							//Import properties file
var sigmaDAO   = require(properties.path + 'app/src/dao/sigmaDAO');			//Import sigmaDAO functionality
var userDAO    = require(properties.path + 'app/src/dao/userDAO');			//Import userDAO funcionality
var logger     = require(properties.path + 'utils/logger/logger').logger;	////Import logging library 

function createSigma(user, sigmaName){
	userDAO.searchByName(user.name, function(result){
		if(result === null){
			logger.log('error', 'User ' + user.name + ' does not exist.');
		}
		else{
			userDAO.validateUser(user.name, user.password, function(valid){
				if (valid){
					sigmaDAO.createSigma(user, sigmaName, function(err){
						if(err){
							logger.log('error', "Could not create Sigma " + sigmaName + " with user " + user.name + 
								" - Error: " + err);
						}
						else{
							logger.log('info', 'New Sigma ' + sigmaName + ' has been created with user ' + user.name);
						}
					});
				}
				else{
					logger.log('error', 'Authentication error creating Sigma ' + sigmaName + ' with user ' + user.name);
				}
			});
		}
	});
}