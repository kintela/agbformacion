var gulp = require("gulp");
var paths = require("../paths.js");
var $ = require("../plugins.js");

gulp.task("watch", function () {
    gulp.watch([
            paths.src.root + "index.html",
            paths.src.root + "app/**/*.*",
            paths.src.root + "app/**/*.*",
            paths.src.root + "css/**/*.*",            
            "!" + paths.dest.root + "**/*.*"
        ],
        ["build"]);       
   
});

