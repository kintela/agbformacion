var project = require("./../project.json");

var paths = {
    src: {
        root: "./"
    },
    dest: {
        root: "./" + project.webroot + "/"
    }
};

paths.dest.js = paths.dest.root + "app/";
paths.dest.libs = paths.dest.root + "libs/";
paths.dest.css = paths.dest.root + "styles/";
paths.dest.fonts = paths.dest.root + "fonts/";

paths.src.css = paths.src.root + "css/**/*.css";
paths.src.js = paths.src.root + "app/**/*.js";
paths.src.html = paths.src.root + "app/**/*.html";

module.exports = paths;