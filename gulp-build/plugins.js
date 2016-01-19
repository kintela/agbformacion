var loadPlugins = require("gulp-load-plugins");

var $ = loadPlugins({
    rename: {
        "gulp-main-bower-files": "mainBowerFiles",
        "gulp-angular-filesort": "angularFileSort"
    }
});

$.del = require("del");

module.exports = $;