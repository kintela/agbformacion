var gulp = require("gulp");
var paths = require("../paths.js");

gulp.task("watch", function () {
    gulp.watch([
            paths.src.root + "index.html",
            paths.src.root + "app/**/*.*",
            paths.src.root + "bower_components/**/*.*",            
            "!" + paths.dest.root + "**/*.*"
        ],
        ["build"]);
});