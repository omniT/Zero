/*
	General app properties object.
	It has:
		-database URI.
		-Log files:
			-info.
			-warming.
			-Error.
*/
module.exports.properties  = {
	//Database route:
	databaseURI : 'mongodb://localhost/zero',
	//Different log files:
	log : {
		info : '/var/log/zero/info.log',
		warn : '/var/log/zero/warning.log',
		error : '/var/log/zero/error.log',
	}
}
