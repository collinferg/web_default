module.exports = function(grunt) {

    // Configure Project
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                files: {
                    'web/css/source/master.css': 'web/css/master.scss'
                }
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 10 versions', 'ie 8', 'ie 9']
            },
            single_file: {
                src: 'web/css/source/master.css',
                dest: 'web/css/source/master.css'
            },
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'web/css/source',
                    src: ['*.css', '!*.min.css'],
                    dest: 'web/css/source',
                    ext: '.min.css'
                }]
            }
        },

        uglify: {
            my_target: {
                files: {
                    'web/js/master.min.js': [
                        'web/js/main.js'
                    ]
                }
            }
        },

        watch: {
            sass: {
                files: 'web/css/**/*.scss',
                tasks: ['sass', 'autoprefixer']
            },
        }

    });

    // Load Plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Register Tasks
    grunt.registerTask('default', ['sass', 'autoprefixer']);
    grunt.registerTask('production', ['sass', 'autoprefixer', 'cssmin', 'uglify']);

};