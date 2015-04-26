/*
	Script to test sigmaDAO.js values.
*/	
var properties = require('properties').properties;
var sigmaDAO   = require(properties.path + 'app/src/dao/sigmaDAO');
var sigmaModel = require(properties.path + 'app/src/models/sigma'); 
var bucket     = require(properties.path + 'app/db/dbModel');
var assert     = require('chai').assert;	//library to assert
var mongoose  = require('mongoose');					//Import mongoose library {http://mongoosejs.com}


//All model tests instanciated under this suite:
suite('sigmaDAO test', function(){
	
	/*
		Open database Connection.
	*/	
	before(function(done) {
        if (mongoose.connection.db) return done();
    	mongoose.connect(properties.databaseURI, done);
  	});
	
	/*
		test sigmaDbWrapper function:
	*/	
	test('sigmaDbWrapper function  test', function(){		
			var sigma = new sigmaModel.sigma();		//sigma needed to test
			sigma.setName('foo');
			sigma.setToken('secretFoo');
		
			var sigmaBucket = new bucket.sigma();	//sigmaBucket needed to test

		sigmaDAO.sigmaDbWrapper(sigma,function(sigmaBucket){
			//Check if the wrapped object has all properties:
			assert.equal(sigmaBucket.name, 'foo', 'sigmaBucket must have the name foo');				
			assert.equal(sigmaBucket.token, 'secretFoo', 'userBucket must have the name foo');
			//Check if the wraped user have all dbmodel required properties:
			Object.keys(sigmaBucket).forEach(function(key){
				assert.property(sigmaBucket, key, 'object must have' + key + ' property');
			});
		});
	});

	/*
		test sigmaModelWrapper function:
	*/	
	test('sigmaModelWrapper function  test', function(){		
			var sigmaBucket = new bucket.user();			//sigmaBucket needed to test
			    sigmaBucket.name = 'foo';
			    sigmaBucket.token = 'secretFoo';

		sigmaDAO.sigmaModelWrapper(sigmaBucket,function(sigma){
			//Check if the wrapped object has all properties:
			assert.equal(sigma.getName(), 'foo', 'sigma must have the name foo');				
			assert.equal(sigma.getToken(), 'secretFoo', 'sigma must have the name foo');
		});
	});

	/*
		Close database connection
	*/	
	after(function(done){
		mongoose.connection.close(function(){
  			done();
		});
  	});	
});	