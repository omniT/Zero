var model = require('../model/mongoSchema');
var crypto = require('crypto');
var userController = require('userController');

function createNode(user, nodeName){
	userController.searchByName(user.name, function(result){
		if(result === null){
			console.log('User does not exist.');
		}
		else{
			var userData = user.name + user.password + new Date().getTime();
			token = crypto.createHmac('sha256', key).update(userData).digest('hex');
			var node = new model.node();
			node.name = nodeName;
			node.token = token;
			node.save();
		}
	});

}