/*
	Script to test userDAO.js values.
*/	
var properties = require('properties').properties;
var userDAO    = require(properties.path + 'app/src/dao/userDAO');
var userModel  = require(properties.path + 'app/src/models/user'); 
var bucket     = require(properties.path + 'app/db/dbModel');
var assert     = require('chai').assert;	//library to assert
var mongoose   = require('mongoose');		//Import mongoose library {http://mongoosejs.com}


//All model tests instanciated under this suite:
suite('userDAO test', function(){
	
	/*
		Open database Connection.
	*/	
	before(function(done) {
        if (mongoose.connection.db) return done();
    	mongoose.connect(properties.databaseURI, done);
  	});
	

	/*
		test userDbWrapper function:
	*/	
	test('userDbWrapper function  test', function(){		
			var user = new userModel.user();		//user needed to test
			user.setName('foo');
			user.setPassword('secretFoo');
		
			var userBucket = new bucket.user();			//userBucket needed to test

		userDAO.userDbWrapper(user,function(userBucket){
			//Check if the wrapped object has all properties:
			assert.equal(userBucket.name, 'foo', 'userBucket must have the name foo');				
			assert.equal(userBucket.password, 'secretFoo', 'userBucket must have the name foo');
			//Check if the wraped user have all dbmodel required properties:
			Object.keys(userBucket).forEach(function(key){
				assert.property(userBucket, key, 'object must have' + key + ' property');
			});
		});
	});

	/*
		test userModelWrapper function:
	*/	
	test('userModelWrapper function  test', function(){		
			var userBucket = new bucket.user();			//userBucket needed to test
			    userBucket.name = 'foo';
			    userBucket.password = 'secretFoo';

		userDAO.userModelWrapper(userBucket,function(user){
			//Check if the wrapped object has all properties:
			assert.equal(user.getName(), 'foo', 'user must have the name foo');				
			assert.equal(user.getPassword(), 'secretFoo', 'user must have the name foo');
		});
	});


	/*
		test 



	/*
		test Createuser:
	
	test('createUser test', function(){
		var user = new userModel.user();		//user needed to test
			user.setName('foo');
			user.setPassword('secretFoo');
		
		var userDao = new userDAO.userDao();		//userDAO needed to test
		
		userDao.searchByName('userTest',function(user){
			if(user !=== null) userDao.dropByName(user.)
		});


	});
	*/

	/*
		Close database connection
	*/	
	after(function(done){
		mongoose.connection.close(function(){
  			done();
		});
  	});
});