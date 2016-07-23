'use strict';

module.exports = function(grunt) {
    // Load all tasks
    require('load-grunt-tasks')(grunt);
    // Show elapsed time
    require('time-grunt')(grunt);

    grunt.initConfig({
        // Konfigurasi disini
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                'assets/js/*.js' // berkas javascript yang akan kita cek. '*' menandakan untuk semua berkas
            ]
        },
        sass: {
            dev: {
                options: {
                    sourceMap: true,
                    outputStyle: 'compact'
                },
                dist: {
                    files: {
                        'assets/css/main.css': 'assets/scss/main.scss'
                    }
                }
            },
            build: {
                options: {
                    sourceMap: true,
                    outputStyle: 'compressed'
                },
                dist: {
                    files: {
                        'assets/css/main.min.css': 'assets/scss/main.scss'
                    }
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    'assets/js/scripts.min.js': [jsfiles]
                }
            }
        },
        watch: {
            sass: {
                files: ['assets/scss/*.scss'],
                tasks: ['sass:dev'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: [jsfiles],
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
        }
    });

    grunt.registerTask('default', ['dev']);
    grunt.registerTask('dev', ['jshint', 'sass:dev', 'uglify']);
    grunt.registerTask('prod', ['jshint', 'sass:build', 'uglify']);
};
