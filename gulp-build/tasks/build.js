var gulp = require("gulp");
var paths = require("../paths.js");
var $ = require("../plugins.js");

gulp.task("build:dependencies:js", function () {
    var filterJS = $.filter("**/*.js");

    return gulp.src('./bower.json')
              .pipe($.plumber())
              .pipe($.mainBowerFiles())
              .pipe(filterJS)
              //.pipe($.sourcemaps.init())
              //.pipe($.concat("libs.js"))
              //.pipe($.uglify())
              //.pipe($.sourcemaps.write("maps"))              
              .pipe(gulp.dest(paths.dest.libs));
});

gulp.task("build:dependencies:css", function () {
    var filterCSS = $.filter("**/*.css");

    return gulp.src('./bower.json')
              .pipe($.plumber())
              .pipe($.mainBowerFiles({
                  overrides: {
                      bootstrap: {
                          main: [
                             "./dist/css/*.min.*"
                          ]
                      }
                  }
              }))
              .pipe(filterCSS)
              //.pipe($.sourcemaps.init())
              //.pipe($.concat("libs.css"))
              //.pipe($.cssmin())
              //.pipe($.sourcemaps.write("maps"))
              .pipe(gulp.dest(paths.dest.css));
});

gulp.task("build:dependencies:fonts", function () {
    var filterFonts = $.filter([
                        "**/*.otf",
                        "**/*.eot",
                        "**/*.svg",
                        "**/*.ttf",
                        "**/*.woff",
                        "**/*.woff2"
    ]);

    return gulp.src('./bower.json')
              .pipe($.plumber())
                .pipe($.mainBowerFiles({
                  overrides: {
                      bootstrap: {
                          main: [
                             "./fonts/*"
                          ]
                      }
                  }
              }))
              .pipe(filterFonts)
              .pipe($.flatten())
              .pipe(gulp.dest(paths.dest.css + "/bootstrap/dist/fonts"));
              //.pipe(gulp.dest(paths.dest.fonts));
});

gulp.task("build:dependencies", ["build:dependencies:js", "build:dependencies:css", "build:dependencies:fonts"]);

gulp.task("build:css", function () {
    return gulp.src(paths.src.css)
               .pipe($.plumber())
               .pipe($.sourcemaps.init())
               .pipe($.cssmin())
               .pipe($.concat("app.css"))
               .pipe($.sourcemaps.write("maps"))
               .pipe(gulp.dest(paths.dest.css))
});

gulp.task("build:app", function () {
    return gulp.src(paths.src.js)
               .pipe($.plumber())
               .pipe($.angularFileSort())
               //.pipe($.sourcemaps.init())
               //.pipe($.concat("app.js"))    
               //.pipe($.uglify())
               //.pipe($.sourcemaps.write("maps"))
               .pipe(gulp.dest(paths.dest.js));
});

gulp.task("build:html", function () {
    return gulp.src([paths.src.html, "!./index.html"])
            .pipe($.plumber())
            .pipe(gulp.dest(paths.dest.js));
});

gulp.task("build:scripts", function () {     
    return gulp.src(paths.src.script)
            .pipe($.plumber())
            .pipe(gulp.dest(paths.dest.js + "/scripts"));
});

gulp.task("build:copyIndex", function () {     
    return gulp.src("index.html")
            .pipe($.plumber())
            .pipe(gulp.dest((paths.dest.root)));
});

gulp.task("build:index", ["build:copyIndex","build:css", "build:app", "build:html","build:scripts"], function () {
    return gulp.src("./wwwroot/index.html")   
               .pipe($.plumber())           
               .pipe($.inject(gulp.src([paths.dest.libs + "**/*.js", paths.dest.js + "**/*.js"], { read: false }), { relative: true }))
               .pipe($.inject(gulp.src(paths.dest.css + "**/*.css", { read: false }), { relative: true }))
               .pipe(gulp.dest(paths.dest.root));
});

gulp.task("build:img", function () {
     var filterImgs = $.filter([
                        "**/*.jpg",
                        "**/*.png",
                        "**/*.gif",
                        "**/*.js"                                   
    ]);
    return gulp.src(paths.src.img)
            .pipe($.plumber())
            .pipe(filterImgs)
            .pipe(gulp.dest(paths.dest.img));
});

gulp.task("build:flash", function () {     
    return gulp.src(paths.src.flash)
            .pipe($.plumber())
            .pipe(gulp.dest(paths.dest.flash));
});

gulp.task("build:video", function () {     
    return gulp.src(paths.src.video)
            .pipe($.plumber())
            .pipe(gulp.dest(paths.dest.video));
});

gulp.task("build:mp3", function () {     
    return gulp.src(paths.src.mp3)
            .pipe($.plumber())
            .pipe(gulp.dest(paths.dest.multimedia));
});

gulp.task('build', function(callback) {
  $.runSequence('build:dependencies',
              'build:index',
              'build:img',
              'build:flash',
              'build:video',
              'build:mp3',
              callback);
});


//gulp.task("build", ["build:dependencies", "build:index","build:img","build:flash"]);