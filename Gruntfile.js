'use strict';

module.exports = function(grunt){
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      project: {
         app: ['app'],
         assets: ['<%= project.app %>/assets'],
         css: ['<%= project.assets %>/sass/app.scss']
     },
     sass: {
         dev: {
           options: {
               style: 'expanded',
               compass: false
           },
           files: {
               '<%= project.assets %>/css/style.css':'<%= project.css %>'
           }
         }
       },
       cssmin: {
           target: {
             files: [{
               expand: true,
               cwd: '<%= project.assets %>/css/',
               src: ['style.css', '!*.min.css'],
               dest: '<%= project.assets %>/css',
               ext: '.min.css'
             }]
           }
         },
       watch: {
         sass : {
           files: '<%= project.assets %>/sass/{,*/}*.{scss,sass}',
           tasks: ['sass:dev']
         },
         cssmin: {
            files: '<%= project.assets %>/css/*.css',
            tasks: ['cssmin:target']
        }
       }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', [
        'watch'
   ]);
};
