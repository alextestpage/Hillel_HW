const gulp = require('gulp');
const concat = require('gulp-concat');

function copyHtml(cb) {
    gulp.src('./src/index.html').pipe(gulp.dest('./dist/index.html'));
    cb();
};

function copyJs(cb) {
    gulp.src('./src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/'));
    cb();
}

module.exports.build = gulp.series(copyHtml, copyJs);