/*
	Script to test userController.js values.
*/	
var properties          = require('properties').properties;
var UseControllerModel  = require(properties.path + 'app/src/controllers/userController').UserController;
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
suite('userController test', function(){

	//Connect to database if other connection does't exist:
		before(function(done) {
        	if (mongoose.connection.db) return done();
    		mongoose.connect(properties.databaseURI, done);
  		});


	//test createUser from userController:
	test('create user test', function(done){
		assert.equal(true, false,'TODO');
	});	

		//test createUser from userController:
	test('validate user test', function(done){
		assert.equal(true, false,'TODO');				
	});	
});	
