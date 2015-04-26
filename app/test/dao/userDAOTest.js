/*
	Script to test userDAO.js values.
*/	
var properties = require('properties').properties;
var userDAO    = require(properties.path + 'app/src/dao/userDAO');
var userModel  = require(properties.path + 'app/src/models/user'); 
var bucket     = require(properties.path + 'app/db/dbModel');
var assert     = require('chai').assert;	//library to assert
var mongoose   = require('mongoose');		//Import mongoose library {http://mongoosejs.com}
var before     = require('mocha').before; 	//before to implement actions before test execution. 
var after      = require('mocha').after;    //after to implement actions after test execution. 

//All model tests instanciated under this suite:
suite('userDAO test', function(){
	
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
		test userDao prototupe properties:
	*/	
	test('userDao prototype properties test', function(){		
			var userDao = new userDAO.userDao();			//userBucket needed to test
			//All the requrired properties to userDao prototype:
			assert.property(userDao, 'createUser', 'object must have createUser property');
			assert.property(userDao, 'updateUser', 'object must have updateUser property');
			assert.property(userDao, 'deleteUser', 'object must have deleteUser property');
			assert.property(userDao, 'validateUser', 'object must have validateUser property');
			assert.property(userDao, 'searchByName', 'object must have searchUserByName property');
			assert.property(userDao, 'searchById', 'object must have searchUserById property');			
	});

	/*
		test Createuser:
	*/
	test('userDao createUser test', function(){		
		//Connect to database:
		before(function(done){
			if (mongoose.connection.db) return done();
			mongoose.connect(properties.databaseURI, done);
		});			
	
		var userDao = new userDAO.userDao();
		var user    = new userModel.user();
			user.setName('foo');
			user.setPassword('secretFoo');

		userDao.searchByName(user.name, function(user){
			if(user === null)	userDao.createUser(user, function(status){
									userDao.searchByName(user.name, function(userFind){
										assert.equal(userFind.getName(), user.getName(), 'user must have the name foo');				
										assert.equal(userFind.getPassword(), user.getName(), 'user must have the name foo');								
									});									
								});
			else userDao.deleteUser(user, function(status){
					userDao.createUser(user, function(status){
						userDao.searchByName(user.name, function(userFind){
							assert.equal(userFind.getName(), user.getName(), 'user must have the name foo');				
							assert.equal(userFind.getPassword(), user.getName(), 'user must have the name foo');								
						});									
					});
				}); 	
		});

		//Disconnect to database:
		after(function(){
			mongoose.connection.close(function(){
+  				done();
			})

		});
	});

	/*
		test DeleteUser:
	*/
	test('userDao deleteUser test', function(){		
		//Connect to database:
		before(function(done){
			if (mongoose.connection.db) return done();
			mongoose.connect(properties.databaseURI, done);
		});			
	
		var userDao = new userDAO.userDao();
		var user    = new userModel.user();
			user.setName('foo');
			user.setPassword('secretFoo');

		userDao.searchByName(user.name, function(user){	
			if(user === null)	userDao.createUser(user, function(status){
									userDao.deleteUser(user, function(status){
										userDAO.searchByName(user, function(status){
											assert.equal(status, null, 'user must not exists');
										});
									})									
								});
			else userDao.deleteUser(user, function(status){
						userDao.searchByName(user.name, function(status){
							assert.equal(status, null, 'user must not exists');									
						});									
				});
		});
			
		//Disconnect to database:
		after(function(){
			mongoose.connection.close(function(){
+  				done();
			})

		});
	});

	/*
		test searchByName:
	*/
	test('userDao searchByName test', function(){		
		//Connect to database:
		before(function(done){
			if (mongoose.connection.db) return done();
			mongoose.connect(properties.databaseURI, done);
		});			
	
		var userDao = new userDAO.userDao();
		var user    = new userModel.user();
			user.setName('foo');
			user.setPassword('secretFoo');

		userDao.searchByName(user.name, function(user){	
			if(user === null)	userDao.createUser(user, function(status){
										userDAO.searchByName(user, function(userFind){
											assert.equal(userFind.getName(), user.getName(), 'user must have this name');
											assert.equal(userFind.getPassword(), user.getName(), 'user must have the name foo');
										});									
								});
			else userDao.deleteUser(user, function(status){
					userDao.createUser(user, function(status){
						userDao.searchByName(user.name, function(userFind){
							assert.equal(userFind.getName(), user.getName(), 'user must have the name foo');				
							assert.equal(userFind.getPassword(), user.getName(), 'user must have the name foo');								
						});									
					});
				});
		});	
		
			
		//Disconnect to database:
		after(function(){
			mongoose.connection.close(function(){
+  				done();
			})

		});
	});
});	