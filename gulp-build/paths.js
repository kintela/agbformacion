var paths = {
    src: {
        root: "./"
    },
    dest: {
        root: "./wwwroot/"
    }
};

paths.dest.js = paths.dest.root + "app/";
paths.dest.libs = paths.dest.root + "libs/";
paths.dest.css = paths.dest.root + "styles/";
paths.dest.fonts = paths.dest.root + "fonts/";
paths.dest.img = paths.dest.root + "img/";

paths.src.css = paths.src.root + "css/**/*.css";
paths.src.js = paths.src.root + "app/**/*.js";
paths.src.html = paths.src.root + "app/**/*.html";
paths.src.img = paths.src.root + "img/**/*.jpg";


module.exports = paths;