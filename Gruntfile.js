module.exports = function(grunt){

	'use strict';

	// Load the plugins
	require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

	// grunt.loadTasks('tasks');

	// Project configuration
	grunt.initConfig({

		less: {
			pub: {
				files: {
					"css/app.css": "less/app.less",
				},
				options: {
					compress: true
				}
			},
			app: {
				files: {
					"css/app.css": "less/app.less",
				}
			},
			options: {
				compress: true
			}
		},

		autoprefixer: {

			options: {
				browsers: ['last 2 versions', 'ie 8', 'ie 9', 'android 2.3', 'android 4', 'opera 12']
			},

			css: {
				src: 'css/app.css'
			}

		},

		watch: {

			less: {
				files: ['less/*.less'],
				tasks: ['less']
			},

		}
	});


	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');

	// Default task.
	grunt.registerTask('default', ['less:pub', 'autoprefixer']);
};
