var gulp    = require('gulp');
var mocha   = require('gulp-mocha');

gulp.task('watch-mocha', function() {
    gulp.watch(['test/**', 'index.js'], ['watch-mocha']);
    return gulp.src(['test/*.js'], {
            read: false
        })
        .pipe(mocha({
            reporter: 'list'
        }));
});
