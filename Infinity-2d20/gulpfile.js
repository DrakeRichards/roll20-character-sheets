const gulp = require('gulp');
const replace = require('gulp-replace');
const fs = require('fs');

gulp.task('copyScript', function() {
    const jsContent = fs.readFileSync('scripts.js', 'utf8');
    return gulp.src('Infinity 2d20.html')
        .pipe(replace(/(<script type="text\/worker">)[\s\S]*?(<\/script>)/, `$1\n${jsContent}\n$2`))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
    gulp.watch('scripts.js', gulp.series('copyScript'));
});
