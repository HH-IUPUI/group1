// add webkit prefix to all style sheets

module.exports = function (grunt) {
  grunt.initConfig({
    postcss: {
      options: {
        map: true,
        processors: [
          require("autoprefixer")(), //add vendor prefixes
        ],
      },
      dist: {
        src: "styles/*.css",
      },
    },
  });

  grunt.loadNpmTasks("@lodder/grunt-postcss");

  grunt.registerTask("default", ["postcss"]);
};

// run script:
// open command prompt as administrator
// cd to file
// enter grunt in command prompt
// webkit will be added to all style sheets.
