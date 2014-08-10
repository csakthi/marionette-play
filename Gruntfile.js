/**
 * Created by sakthi on 8/8/14.
 */
module.exports = function (grunt) {

    grunt.initConfig({

        meta: {
            src: "./",
            dist: "dist",
            js: "<%= meta.src %>js/**/*",
            pkg: require('./package.json')
        },

        copy: {
            app: {
                expand: true,
                cwd: '<%= meta.src %>',
                src: ['app/**/*'],
                dest: '<%= meta.dist %>'
            },
            libs: {
                expand: true,
                cwd: '<%= meta.src %>',
                src: ['libs/**/*'],
                dest: '<%= meta.dist%>/app'
            },
            tests: {
                expand: true,
                src: ['tests/**/*'],
                dest: '<%= meta.dist %>'
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['<%= meta.src %>/js/**/*.js'],
                //TODO - why name not found exception?
                dest: '<%= meta.dest %>/<%= pkg.name %>.js'
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    '<%= meta.dist %>/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },

        qunit: {
            files: ['test/**/*.html']
        },

        jshint: {
            files: ['Gruntfile.js', 'app/**/*'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },

        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['copy']
        },

        connect: {
            server: {
                options: {
                    port: 8080,
                    hostname : 'localhost',
                    base: './dist/app'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.registerTask('test', ['jshint', 'qunit']);
    grunt.registerTask('default', ['copy']);
    grunt.registerTask('serve', function () {
        grunt.task.run([ 'connect', 'watch']);
    });
};