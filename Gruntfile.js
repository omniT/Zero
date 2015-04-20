/*
	grunt tasks:
		make:
			-create a simbolic link from properties.js to node_modules
*/			

module.exports = function(grunt) {
    // grunt config:
    grunt.initConfig({
    	shell: {
        	propertieslink: {
            	command: 'ln -s ' + __dirname + '/properties.js ' + __dirname + '/node_modules/properties.js',
        	}
    	}
	});

	//Import required libraries
	grunt.loadNpmTasks('grunt-shell');

	//Rergister new task:
	grunt.registerTask('make', ['shell']);
};

