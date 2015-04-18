/*
	Script to test user.js values.
*/	

var user = require('/app/src/models/user');
var expect = require('chai').expect;	//library to assert

//All model tests instanciated under this suite:
suite('user model test', function(){

	//test to test if user object has all the properties:
	test('user properties test', function(){	
		expect(typeof user.name === 'string');

	});

});