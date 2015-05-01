/*
	Script to test sigmaDAO.js values.
*/	
var properties = require('properties').properties;
var sigmaDAO   = require(properties.path + 'app/src/dao/sigmaDAO');
var sigmaModel = require(properties.path + 'app/src/models/sigma'); 
var bucket     = require(properties.path + 'app/db/dbSchema');
var assert     = require('chai').assert;	//library to assert
var mongoose   = require('mongoose');					//Import mongoose library {http://mongoosejs.com}

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
suite('sigmaDAO test', function(){

});	