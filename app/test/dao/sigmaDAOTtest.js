/*
	Script to test sigmaDAO.js values.
*/	
var properties = require('properties').properties;
var sigmaDAO   = require(properties.path + 'app/src/dao/sigmaDAO');
var sigmaModel = require(properties.path + 'app/src/models/sigma'); 
var bucket     = require(properties.path + 'app/db/dbSchema');
var assert     = require('chai').assert;	//library to assert
var mongoose   = require('mongoose');					//Import mongoose library {http://mongoosejs.com}


//All model tests instanciated under this suite:
suite('sigmaDAO test', function(){

});	