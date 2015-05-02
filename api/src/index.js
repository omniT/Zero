var properties = require('properties').properties;   //Properties file

/*
	Module to define all calls to different rest routes 
	defined in this folder in their own files.
*/	

module.exports = function(rest){

	require(properties.path + 'api/src/userApi')(rest);

}