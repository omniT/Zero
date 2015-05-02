var properties = require('properties').properties;							//Import properties file
var logger     = require(properties.path + 'utils/logger/logger').logger;	//Import logging library 

var crypto     = require('crypto')	 //Import libraries to crypt all the data /* https://nodejs.org/api/crypto.html */	 	
var UserModel  = require(properties.path + 'app/src/models/user').User; 
var UserDaoModel    = require(properties.path + 'app/src/dao/userDAO').UserDao	

/*
	UserController prototype
*/
function UserController(){

	var userDao = new UserDaoModel();

	/*	
		Create new user, test userName exists

		Callbacks status code based on http status codes http://en.wikipedia.org/wiki/List_of_HTTP_status_codes.
	*/	
	this.createUser = function(user, callback){
		//Encript the password:
		user.setPassword(crypto.createHash('sha256').update(user.getPassword()).digest());
		userDao.create(user, function(data){
			//if the result is an instance of userMongoose Schema it was created:
			if(data instanceof UserModel) callback({status : 201, data : data}); //If user has been created return correct value 201 and the user.
			else if (data.code === 11000) callback({status : 409, data: 'this user already exist'});
			else logger.log('error', " UserController: Could not create user:" + data);
		});
	};

	this.findUserByName = function(userName, callback){
		userDao.findByName(userName, function(data){
			if(data === null)callback({status: 204, data: 'user not exist'})
			else if(data instanceof UserModel) callback({status : 201, data : data}); //If user has been found  return correct value 201 and the user.	
			else logger.log('error', " UserController: Could not find user by name:" + data);
		});
	}

	/*
		Function to validate an user.
	*/	 
	this.validateUser = function(userName, password, callback){
		var passwd = crypto.createHash('sha256').update(password).digest().toString();
		userDao.findByName(userName, function(user){
			if(user === null)callback({status: 404, data: 'user not exist'});
			if(user.password === passwd) callback({status: 200, data: user});
			else if(user.password !== passwd)callback({status: 401, data: 'user password dont coincide'});
			else{
				logger.log('error', " UserController: Could not validate user:" + user);
				callback(status: 500, data: user);
			} 				
		});
	};
}	
exports.UserController = UserController;


