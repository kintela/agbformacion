var gulp = require('gulp');
var serve = require('gulp-serve');

gulp.task("build:index",function(){
    return gulp.src("index.html")
            .pipe($.plumber())
            .pipe($.inject(gulp.src([paths.dest.libs + "**/*.js", paths.dest.js + "**/*.js"], { read: false }), { relative: true }))
            .pipe($.inject(gulp.src(paths.dest.css + "**/*.css", { read: false }), { relative: true }))        
            .pipe(gulp.dest(paths.dest.root));    
});

gulp.task('serve', serve('wwwroot'));
gulp.task('serve-build', serve(['wwwroot', 'build']));
gulp.task('serve-prod', serve({
  root: ['wwwroot', 'build'],
  port: 80,
  middleware: function(req, res) {
    // custom optional middleware 
  }
}));