var model  = require('../model/mongoSchema');
var crypto = require('crypto');

//Where to store the kay is still a mistery
var key = 'good private key we need to make';

/*
	Function to create a new node
*/
function createNode(user, nodeName, callback){
	var userData = '' + user.name + user.password + new Date().getTime();
	console.log(userData);
	token = crypto.createHmac('sha256', key).update(userData).digest('hex');
	var node = new model.node();
	node.name = nodeName;
	node.token = token;
	node.save(callback);
}
exports.createNode = createNode;