// Include gulp
var /*gulp = require('gulp'),*/
  // Include Our Plugins
  less = require('gulp-less'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer');

const {src, dest, watch, task, series} = require('gulp')

/*gulp.task('css', function () {
  gulp
    .src('./less/main.less')
    .pipe(less({ strictMath: true }))
    .pipe(postcss([
      autoprefixer({ browsers: ['> 1%', 'IE 9', 'IE 10']})
    ]))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
  gulp.watch('./less/!**!/!*.less', ['css']);
});*/

function css() {
  return src('./less/**/*.less')
    .pipe(less({ strictMath: true }))
    .pipe(postcss([
      autoprefixer({ browsers: ['> 1%', 'IE 9', 'IE 10']})
    ]))
    .pipe(dest('./css'));
}

function watchStyles() {
  watch('./less/**/*.less', series(css))
}

exports.css = css
exports.style = series(watchStyles)
exports.default = series(css, watchStyles)
