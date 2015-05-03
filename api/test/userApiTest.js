/*
	Unit test to User rest api
*/	

var properties = require('properties').properties;
    assert 	   = require('chai').assert;
    http       = require('http');
    restRequest         = require('restler');
var UserModel    = require(properties.path + 'app/src/models/user').User;	//Import User model.
    UserDaoModel = require(properties.path + 'app/src/dao/userDAO').UserDao;

var before     = require('mocha').before; 	//before to implement actions before test execution. 

//All opportunity api tests
suite('(TODO)oportunities api tests', function(){
		
	//Declarations:
	var userDao = new UserDaoModel();
	var apiServer  = properties.serverRoute;	//server Route
	
	//Test user login
	test('(TODO)should be able to login an user', function(done){
		assert.equal(true, false, "TODO");
	});

});


