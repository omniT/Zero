var properties    = require('properties').properties   //Properties file
  ,	LocalStrategy = require('passport-local').Strategy

var userControllerModel = require(properties.path + 'app/src/controllers/userController').UserController
/*
	Passport.js libraty configuration.
	Mdules working:
		-passport-local : module to manage local stored users
*/	

module.exports = function(passport){

}