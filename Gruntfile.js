/*
	grunt tasks:
		make:
			-create a simbolic link from properties.js to node_modules
*/			
var fs = require('fs');

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
	        ]
	      }
	    }
  	});
	
	/*
		Register all tasks:
	*/	

	//Grunt task to set build the basic project configuration:
	grunt.registerTask('build', 'My "default" task description.', function() {
		//Create a symbolic link to set properties.js file as a general library:
  		fs.symlinkSync(__dirname + '/properties.js', __dirname + '/node_modules/properties.js');
	});

	grunt.registerTask('test',['mochaTest']);
};

