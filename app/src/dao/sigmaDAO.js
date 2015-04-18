var model  = require('../model/sigma');
var crypto = require('crypto');
var tokenKeyFile = require('../../../properties').properties.tokenKeyFile;
var fs = require('fs');

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