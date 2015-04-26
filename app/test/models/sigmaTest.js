/*
	Script to test sigma.js values.
*/	

var properties = require('properties').properties;
var sigmaModel = require(properties.path + 'app/src/models/sigma');
var assert     = require('chai').assert;	//library to assert

//All model tests instanciated under this suite:
suite('sigma model test', function(){
	var sigma = new sigmaModel.sigma();

	//test to test if sigma object has all the properties:
	test('sigma properties test', function(){	
		sigma.setName('foo');
		sigma.setToken('fooSecret');
		assert.equal(sigma.getName(), 'foo', 'sigma token must be foo');
		assert.equal(sigma.getToken(), 'fooSecret', 'sigma token must be fooSecret');
	});

});