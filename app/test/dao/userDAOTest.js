/*
	Script to test userDAO.js values.
*/	
var properties    = require('properties').properties;
var UserDaoModel  = require(properties.path + 'app/src/dao/userDAO').UserDao;
var UserModel  = require(properties.path + 'app/src/models/user').User; 
var assert     = require('chai').assert;	//library to assert
var mongoose   = require('mongoose');		//Import mongoose library {http://mongoosejs.com}
var before     = require('mocha').before; 	//before to implement actions before test execution. 
var after      = require('mocha').after;    //after to implement actions after test execution. 


/*
	Generate a random 10 characters string to fill test values
*/	
function randmonString(){
    var text = ""
      ,	possible = "abcdefghijklmnopqrstuvwxyz";
    for( var i=0; i < 10; i++ ) text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

//All model tests instanciated under this suite:
suite('userDAO test', function(){

	//Connect to database if other connection does't exist:
		before(function(done) {
        	if (mongoose.connection.db) return done();
    		mongoose.connect(properties.databaseURI, done);
  		});

	/*
		test userDao prototupe properties:
	*/	
	test('userDao prototype properties test', function(){		
			var userDao = new UserDaoModel();			//userBucket needed to test
			//All the requrired properties to userDao prototype:
			assert.property(userDao, 'create', 'object must have createUser property');
			assert.property(userDao, 'update', 'object must have updateUser property');
			assert.property(userDao, 'delete', 'object must have deleteUser property');
			assert.property(userDao, 'findByName', 'object must have searchByName property');
			assert.property(userDao, 'findById', 'object must have searchUserById property');			
	});


	//test create from userDAO:
	test('create user test', function(done){	

		var userDao = new UserDaoModel();

		var user = new UserModel();
		user.setName(randmonString());
		user.setPassword(randmonString());

		var testId = user.getId();
			
		userDao.create(user, function(user){
			userDao.findById(user.getId(), function(userFound){
				assert.equal(userFound.getId().toString(), testId ,'It must have a value');
				done();
			});
		});
	});

	//test delete from UserDAO:
	test('delete user test', function(done){	

		var userDao = new UserDaoModel();

		var user = new UserModel();
		user.setName(randmonString());
		user.setPassword(randmonString());

		user.save(function(err, user){
			userDao.delete(user, function(info){
				userDao.findById(user.getId(), function(userFound){
					assert.isNull(userFound, 'It should be null');
					done();
				});
			});
		});
	});

	//test update from userDAO:
	test('update user test', function(done){	

		var userDao = new UserDaoModel();

		var user = new UserModel();
		user.setName(randmonString());	
		user.setPassword(randmonString());	
			
		user.save(function(err, user){
			userDao.findById(user.getId(), function(userFound){
				userFound.setName('fdsa');
				userDao.update(userFound, function(updatedUser){
					userDao.findById(user.getId(), function(userFound){
						assert.equal(user.getName(), userFound.getName(), 'two id Must be the same');
						done();
					});	
				});				
			});		
		});
	});

	//test findByName from userDAO:
	test('findByName userDao test', function(done){	

		var userDao = new UserDaoModel();

		var user = new UserModel();
		user.setName(randmonString());	
		user.setPassword(randmonString());	
		

		user.save(function(err, user){
			userDao.findByName(user.getName(), function(userFound){
				assert.equal(user.getId().toString(), userFound.getId().toString(), 'two id Must be the same');
				userDao.delete(userFound);
				done();
			});		
		});
	});


	//test findAll from userDao:
	test('findAll userDao test', function(done){	
		var userDao = new UserDaoModel();

		userDao.findAll(function(values){
			UserModel.count({}, function(err,count){
			assert.equal(values.length, count, 'count must be the same than resultsLength');
				done();
			});
		});
	});
});	