const gulp = require('gulp')
const connect = require('gulp-connect')

const src = [
	['**/*.html', '**/*.css']
]

gulp.task('connect', function() {
	connect.server({
		root: '.',
		livereload: true
	});
});

gulp.task('reload', function () {
	gulp.src('**/*.html')
		.pipe(connect.reload());
});

gulp.task('watch', function () {
	gulp.watch(src, ['reload']);
});

gulp.task('default', ['connect', 'watch']);
