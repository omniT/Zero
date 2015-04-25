/*
	Script to test sigma.js values.
*/	
var properties = require('properties').properties;
var userDAO    = require(properties.path + 'app/src/dao/userDAO');
var userModel  = require(properties.path + 'app/src/models/user'); 
var bucket     = require(properties.path + 'app/db/dbModel');
var assert     = require('chai').assert;	//library to assert


//All model tests instanciated under this suite:
suite('userDAO test', function(){

	//test UserWrapper function:
	test('userWrapper function  test', function(){
		
		var user = new userModel.user();		//user needed to test
			user.setName('foo');
			user.setPassword('secretFoo');
		
		var userBucket = bucket.user();			//userBucket needed to test
		
		userDAO.userWrapper(user,function(userBucket){
			//Check if the wrapper has all properties:
			assert.equal(userBucket.name, 'foo', 'userBucket must have the name foo');				
			assert.equal(userBucket.password, 'secretFoo', 'userBucket must have the name foo');
			//Check if the wraped user have all dbmodel required properties:
			Object.keys(userBucket).forEach(function(key){
				assert.property(userBucket, key, 'object must have' + key + ' property');
			});
		});
	});
});