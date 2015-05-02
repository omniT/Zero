var properties    = require('properties').properties   //Properties file
  ,	LocalStrategy = require('passport-local').Strategy

var userController = require(properties.path + 'app/src/controllers/userController').UserController
/*
	Passport.js libraty configuration.
	Mdules working:
		-passport-local : module to manage local stored users
*/	
module.exports = function(passport){
	
	/*
		Set local validate user configuration
	*/	
	passport.use(new LocalStrategy(
		function(username, password, done) {
			userController.validateUser(userName, password, function(dataFound){
				if(dataFound.status === 404) return done(null, false, {message: 'Incorrect username.'});
				if(dataFound.status === 401) return done(null, false, {message: 'Incorrect passord'});
				if(dataFound.status === 200) return done(null,data.data);
				else return done(dataFound);
			});		
  		}
	));
}