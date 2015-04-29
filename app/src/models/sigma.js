/*
	File to define sigma app objects using mongoose library to implement 
	ODM pattern in the application.
*/	

var properties  = require('properties').properties; //Import properties file, and choose properties object
var mongoose    = require('mongoose');              //Import mongoose library {http://mongoosejs.com}
var dbSchema    = require(properties.path + 'app/db/dbSchema');						

/*
	Node model.
	Properties:
		-name basic UTF8 String
		-token : it´screated by: username + userpassword + timestamp
*/	
var Sigma = mongoose.model('sigma', dbSchema.sigmaSchema);

    Sigma.prototype.setName = function(sigmaName){
        this.name = sigmaName;
    };

    Sigma.prototype.setToken = function(sigmaToken){
        this.token = sigmaToken;
    };

    Sigma.prototype.getId = function(){
        return this._id;
    };

    Sigma.prototype.getName = function(){
    	return this.name;
    };

    Sigma.prototype.getToken = function(){
    	return this.token;
    };

exports.Sigma = Sigma;


