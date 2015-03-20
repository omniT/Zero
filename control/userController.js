var model = require('../model/mongoSchema');
var crypto = require('crypto');
var sha = crypto.createHash('sha256');

function createUser(name, pass) {	
	sha.update(pass);
	var user = new model.user();
	user.name = name
	user.password = sha.digest();
	
}

createUser('pepe', '12345');