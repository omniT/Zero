/*
	Script to test user.js values.
*/	

var properties = require('properties').properties;
var userModel  = require(properties.path + 'app/src/models/user');
var assert     = require('chai').assert;	//library to assert

//All model tests instanciated under this suite:
suite('user model test', function(){
	var user = new userModel.user();

	//test to test if user object has all the properties:
	test('user properties test', function(){	
		user.setName('foo');
		user.setPassword('fooSecret');
		assert.equal(user.getName(), 'foo', 'User name must be foo');
		assert.equal(user.getPassword(), 'fooSecret', 'User password must be fooSecre');
	});

});