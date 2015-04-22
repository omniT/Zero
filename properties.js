/*
	General app properties object.
	It has:
		-database URI.
		-Log files:
			-info.
			-warming.
			-Error.
		-Private key file
*/
module.exports.properties  = {
	//Absolute application path
	path : __dirname + '/',
	//Database route:
	databaseURI : 'mongodb://localhost/zero',
	//Different log files:
	log : {
		info : '/var/log/zero/info.log',
		warn : '/var/log/zero/warning.log',
		error : '/var/log/zero/error.log',
	}
	//Key to generate tokens
	//TO-DO: 
		/*	
			Grunt task to create this file path
			Grunt task to generate the token
		*/	
	//tokenKeyFile : '.token_genkey.key'
};
