var gulp = require("gulp");
var paths = require("../paths.js");
var $ = require("../plugins.js");

gulp.task("clean:dependencies", function (cb) {
    $.del(paths.dest.libs, cb);
});

gulp.task("clean:css", function (cb) {
    $.del(paths.dest.css, cb);
});

gulp.task("clean:app", function (cb) {
    $.del(paths.dest.js, cb);
});

gulp.task("clean:html", function (cb) {
    $.del(paths.dest.root + "**/*.html", cb);
});

gulp.task("clean:fonts", function (cb) {
    $.del(paths.dest.fonts, cb);
});

gulp.task("clean", ["clean:dependencies", "clean:css", "clean:app", "clean:html", "clean:fonts"]);