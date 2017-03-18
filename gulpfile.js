var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('test-gulp', () => {
	console.log("····· Hola gulp! ·····");
});

gulp.task('browserSync', ()=>{
	browserSync.init({
		server: {
			baseDir: ''
		}
	})
});

gulp.task('dev', ['browserSync'], ()=>{
	gulp.watch('index.html', browserSync.reload);
});

gulp.task('default', ['test-gulp', 'browserSync']);
