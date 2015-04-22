var properties = require('properties').properties;	//Import properties file
var fs = require('fs');								
var crypto = require('crypto');						//Import libraries to crypt all the data /* https://nodejs.org/api/crypto.html */	
var model  = require(properties.path + 'app/src/model/sigma');				//Import sigma 
var tokenKeyFile = properties.tokenKeyFile;			//Import tokenFIle since properties file							
							

/*
	Function to create a new sigma
*/
function createSigma(user, sigmaName, callback){
	try{
		var key = fs.readFileSync(tokenKeyFile);
	}
	catch(err){
		return callback(err);
	}
	var userData = '' + user.name + user.password + new Date().getTime();
	var token = crypto.createHmac('sha256', key).update(userData + sigmaName).digest('hex');
	key = '000000000000000000000000000000';
	var sigma = new model.sigma();
	sigma.name = sigmaName;
	sigma.token = token;
	sigma.save(callback);
}
exports.createSigma = createSigma;