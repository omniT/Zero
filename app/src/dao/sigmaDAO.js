var properties  = require('properties').properties;				//Import properties file
var sigmaModel  = require(properties.path + 'app/src/models/sigma');	//Import sigma model
var bucket = require(properties.path + 'app/db/dbSchema');
var fs     = require('fs');											//Import File system IO libraries.
var crypto = require('crypto');									//Import libraries to crypt all the data /* https://nodejs.org/api/crypto.html */	
var tokenKeyFile = properties.tokenKeyFile;						//Import tokenFIle since properties file							


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
