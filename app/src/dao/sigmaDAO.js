var model  = require('../model/sigma');
var crypto = require('crypto');

//Where to store the kay is still a mistery
var key = 'good private key we need to make';

/*
	Function to create a new sigma
*/
function createSigma(user, nodeName, callback){
	var userData = '' + user.name + user.password + new Date().getTime();
	console.log(userData);
	token = crypto.createHmac('sha256', key).update(userData).digest('hex');
	var sigma = new model.sigma();
	sigma.name = nodeName;
	sigma.token = token;
	sigma.save(callback);
}
exports.createSigma = createSigma;