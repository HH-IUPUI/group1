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
