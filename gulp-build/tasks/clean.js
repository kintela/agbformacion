var gulp = require("gulp");
var paths = require("../paths.js");
var $ = require("../plugins.js");

gulp.task("clean:dependencies", function () {
    return $.del(paths.dest.libs);
});

gulp.task("clean:css", function () {
    return $.del(paths.dest.css);
});

gulp.task("clean:app", function () {
    return $.del(paths.dest.js);
});

gulp.task("clean:html", function () {
    return $.del(paths.dest.root + "**/*.html" );
});

gulp.task("clean:fonts", function (cb) {
    return $.del(paths.dest.fonts);
});

gulp.task("clean:imgs", function () {
    return $.del(paths.dest.img);
});

gulp.task("clean:multimedia", function () {
    return $.del(paths.dest.multimedia);
});

gulp.task("clean", ["clean:dependencies", "clean:css", "clean:app", "clean:html", "clean:fonts","clean:imgs","clean:multimedia"]);