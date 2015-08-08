module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),


		watch: {
			options: {
				livereload: true,
				atBegin: true
			},

			js: {
				files: ['app/*.js','app/**/*.js',],
				tasks: ['concat:js']
			},
			html: {
				files: ['app/*.html', 'app/**/*.html'],
				tasks: ['html2js:dist']
			},
			sass: {
				files: ['assets/scss/main.scss', 'assets/scss/**/*.scss', 'assets/scss/**/**/*.scss'],
				tasks: ['sass:dev']
			}
		},



		// HTML
		html2js: {
			dist: {
				src: ['app/**/*.html'],
				dest: 'app/app.templates.js'
			}
		},


		// Javascript
		concat: {
			js: {
				options: {
					separator: ';',
				},
				src: ['app/**/**/*.js', 'app/**/*.js', 'app/*.js'],
				dest: 'dist/jt.min.js'
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> : <%= grunt.template.today("mm-dd-yyyy") %> */\n'
			},
			build: {
				src: 'dist/jt.min.js',
				dest: 'dist/jt.min.js'
			}
		},


		// CSS
		sass: {
			dev: {
				options: {
					// banner: '/* <%= pkg.name %> : <%= grunt.template.today("mm-dd-yyyy") %> -- DEBUG */\n',
					style: 'nested',
					lineNumbers: true
				},
				files: {
					'dist/jt.min.css': 'assets/scss/main.scss'
				}
			},
			dist: {
				options: {
					// banner: '/*! <%= pkg.name %> : <%= grunt.template.today("mm-dd-yyyy") %> */\n',
					style: 'compressed'
				},
				files: {
					'dist/jt.min.css': 'assets/scss/main.scss'
				}
			}
		}

	});


	grunt.loadNpmTasks('grunt-contrib-watch');
	// Javascript
	grunt.loadNpmTasks('grunt-html2js');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	// CSS
	grunt.loadNpmTasks('grunt-contrib-sass');


	grunt.registerTask('default', [
		'html2js:dist',
		'concat:js',
		// 'uglify',
		'sass:dist'
	]);

}