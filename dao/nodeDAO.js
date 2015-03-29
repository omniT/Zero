var model  = require('../model/mongoSchema');
var crypto = require('crypto');

/*
	Function to create a new node
*/
function createNode(user, nodeName){
	var userData = user.name + user.password + new Date().getTime();
	token = crypto.createHmac('sha256', key).update(userData).digest('hex');
	var node = new model.node();
	node.name = nodeName;
	node.token = token;
	node.save();
}
exports.createNode = createNode;