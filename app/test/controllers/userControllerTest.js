/*
	Script to test userController.js values.
*/	
var properties          = require('properties').properties;
var UserControllerModel  = require(properties.path + 'app/src/controllers/userController').UserController;
var UserModel  = require(properties.path + 'app/src/models/user').User; 
var assert     = require('chai').assert;	//library to assert
var mongoose   = require('mongoose');		//Import mongoose library {http://mongoosejs.com}
var before     = require('mocha').before; 	//before to implement actions before test execution. 
var after      = require('mocha').after;    //after to implement actions after test execution. 
var jwt        = require('jwt-simple');	//Library to create userSession token since a payload

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
suite('userController test', function(){

	//Connect to database if other connection does't exist:
	before(function(done) {
    	if (mongoose.connection.db) return done();
		mongoose.connect(properties.databaseURI, done);
	});

	var userController = new UserControllerModel();

	//test createUser from userController:
	test('create user test', function(done){
		var user = new UserModel();
		user.setName(randmonString());
		user.setPassword(randmonString());

		//Create one user:
		userController.createUser(user, function(data){

			var userTry = new UserModel();
			userTry.setName(user.getName());
			userTry.setPassword(user.getPassword())
			//If the user exist no more users  with the same name can be created:
			userController.createUser(userTry,function(dataTry){
				assert.equal(dataTry.status , 409 ,'The user cant be created');
				done();
			});
		});	
	});	

	//test createUser from userController:
	test('find By name user test', function(done){
		var user = new UserModel();
		user.setName(randmonString());
		user.setPassword(randmonString());		
		//Create one user:
		userController.createUser(user, function(data){
			var userName = user.getName();
			userController.findUserByName(userName, function(dataFound){
				assert.equal(dataFound.status , 201 ,'User must be found');
				userController.findUserByName(randmonString(), function(secondDataFound){
					assert.equal(secondDataFound.status , 204 ,'User must be found');
					done();
				});
			});
		});		
	});	

	//test createUser from userController:
	test('validate user test', function(done){
		var user = new UserModel();
		user.setName(randmonString());
		user.setPassword(randmonString());
		var userPassword = user.getPassword();
		userController.createUser(user, function(data){
			userController.validateUser(user.getName(), userPassword, function(dataFound){
				assert.equal(dataFound.status , 200 ,'User must be dataFound');
				userController.validateUser(user.getName(), randmonString(), function(secondDataFound){
					assert.equal(secondDataFound.status , 401 ,'User musnt be validated');
					done();
				});
			});
		});
	});

	//test Find user by id from userController:
	test('find by id user test', function(done){
		var user = new UserModel();
		user.setName(randmonString());
		user.setPassword(randmonString());		
		//Create one user:
		userController.createUser(user, function(findData){
			var userId = findData.data.getId();
			userController.findUserById(userId, function(dataFound){
				assert.equal(dataFound.status , 200 ,'user must be found');
				userController.findUserById(new UserModel().getId(), function(secondDataFound){
					assert.equal(secondDataFound.status , 204 ,'user must be found');
					done();
				});
			});
		});		
	});	

	
	//test createSesionUser from userController:
	test('(TODO)create sesion  user test', function(done){
		var user = new UserModel();
		user.setName(randmonString());
		user.setPassword(randmonString());
		var userPassword = user.getPassword();
		userController.createUser(user, function(findData){			
			userController.validateUser(user.getName(), userPassword, function(dataFound){			
				userController.createSesion(dataFound.data, function(userSesionToken){
					console.log(userSesionToken);
					//console.log(findData.getId());
					/*
					var token = userSesionToken.split(".");
					console.log(token)
					var payload = jwt.decode(token, properties.tokenUserKeyFile);
					
					console.log(payload);
					*/
				});		
			});
		});
	});			
});	
