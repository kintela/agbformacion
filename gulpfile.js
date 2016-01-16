var loadPlugins = require("gulp-load-plugins");

var $ = loadPlugins({
    rename: {
        "gulp-main-bower-files": "mainBowerFiles",
        "gulp-angular-filesort": "angularFileSort"
    }
});

$.del = require("del");

module.exports = $;

var gulp = require("gulp");

gulp.task("build:dependencies:js", function () {
    var filterJS = $.filter("**/*.js");

    return gulp.src('./bower.json')
              .pipe($.plumber())
              .pipe($.mainBowerFiles({
                   overrides: {
                       bootstrap: {
                           main: [
                               "./dist/js/bootstrap.js"                               
                           ]
                       }
                   }
               }))
              .pipe(filterJS)
              .pipe($.sourcemaps.init())
              .pipe($.concat("libs.js"))
              .pipe($.uglify())
              .pipe($.sourcemaps.write("maps"))              
              .pipe(gulp.dest(paths.dest.libs));
});

