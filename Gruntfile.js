/*
	grunt tasks:
		build:
			- Execute the 'propertiesLink' and 'genKey' tasks.
		propertiesLink:
			- Create a simbolic link from properties.js to node_modules.
		genKey:
			- Create the encryption key for tokens.
*/
var fs = require('fs');
var crypto = require('crypto');

module.exports = function(grunt) {
	
	//load all required plugins:
	[
		'grunt-mocha-test',
	].forEach(function(task){
		grunt.loadNpmTasks(task);
	});

	/*
		Plugins config:
	*/	
	grunt.initConfig({
	    //MochaTest:
	    mochaTest: {
	      test: {
	        options: {
          		ui: 'tdd', 		
	          	reporter: 'spec',	          
	        },
	        src: ['app/test/models/*.js',
	        	  'app/test/dao/*.js',
	        	  'app/test/controllers/*.js',
	        	  'api/test/*.js',	
	        ]
	      }
	    }
  	});
	
	/*
		Register all tasks:
	*/	

	//Task to create a simbolic link from properties.js to node_modules:	
	grunt.registerTask('propertiesLink', '*Build Task*. Create a symbolic link to set properties.js file as a general library.', function() {
  		fs.symlinkSync(__dirname + '/properties.js', __dirname + '/node_modules/properties.js');
	});

	//Task to create the encryption key for tokens:
	grunt.registerTask('genKey', '*Build Task*. Generate and store the key to encrypt tokens.', function(){
		var key = crypto.randomBytes(24).toString('base64');
		fs.writeFileSync('.token_genkey.key', key);
	});


	//Task to create the encryption key for user tokens:
	grunt.registerTask('genUserKey', '*Build Task*. Generate and store the key to encrypt tokens.', function(){
		var key = crypto.randomBytes(256).toString('base64');
		fs.writeFileSync('.userToken_genkey.key', key);
	});


	//Grunt task to set build the basic project configuration:
	grunt.registerTask('build', 'Execute the build tasks', ['propertiesLink', 'genKey']);

	grunt.registerTask('test',['mochaTest']);
};

