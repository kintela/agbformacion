var gulp = require('gulp');
var serve = require('gulp-serve');

gulp.task('serve', serve('wwwroot'));

gulp.task('serve-build', serve(['wwwroot', 'build']));

gulp.task('serve-prod', serve({
  root: ['wwwroot', 'build'],
  port: 80,
  middleware: function(req, res) {
    // custom optional middleware 
  }
}));

require('require-dir')('gulp-build/tasks');