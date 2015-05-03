/*
	General app properties object.
	It has:
		-database URI.
		-express server URL
		-Log files:
			-info.
			-warming.
			-Error.
		-Private sigma token key file
		-private user token key file
*/
module.exports.properties  = {
	//Absolute application path:
	path : __dirname + '/',
	//Server basic route:
	serverRoute : 'http://localhost:3000', 	
	//Database route:
	databaseURI : 'mongodb://localhost/zero',
	//Different log files:
	log : {
		info : '/var/log/zero/info.log',
		warn : '/var/log/zero/warning.log',
		error : '/var/log/zero/error.log',
	},
	//Key to generate sigma tokens
	tokensigmaKeyFile : '.token_genkey.key',  
	//Key to generate tokens
	tokenUserKeyFile : '.userToken_genkey.key',
};
