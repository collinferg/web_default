module.exports = function(grunt) {

    // Configure Project
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    sourcemap: 'none',
                    noCache: true
                },
                files: {
                    'css/master.css': 'scss/master.scss'
                }
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 10 versions', 'ie 8', 'ie 9']
            },
            single_file: {
                src: 'css/master.css',
                dest: 'css/master.css'
            },
        },

        cssmin: {
          target: {
            files: [{
              expand: true,
              cwd: 'css',
              src: ['*.css', '!*.min.css'],
              dest: 'css',
              ext: '.min.css'
            }]
          }
        },

        uglify: {
            my_target: {
                files: {
                    'js/master.min.js': [
                        'js/main.js',
                        'js/highlight.pack.js',
                        'js/ezTabs.js'
                    ]
                }
            }
        },

        watch: {
            sass: {
                files: 'scss/*.scss',
                tasks: ['sass', 'autoprefixer']
            },
            cssmin: {
                files: 'css/master.css',
                tasks: ['cssmin']
            },
            uglify: {
                files: ['js/*.js', '!js/master.min.js'],
                tasks: ['uglify']
            }
        }

    });

    // Load Plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Register Tasks
    grunt.registerTask('default', ['sass']);
    grunt.registerTask('production', ['sass', 'cssmin', 'uglify']);

};