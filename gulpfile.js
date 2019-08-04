var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create(),
webpack = require('webpack');


gulp.task('default', function(){
	console.log('created gulp task')
});

gulp.task('html', function(){
	console.log('imagine somthing useful')	  
});

gulp.task('watch', function(){
	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});
//	watch('./app/index.html', gulp.series('html'));
	watch('./app/index.html', function(){
		browserSync.reload();	  
	});
	
	watch('./app/js/**', gulp.series('scriptsRefresh'));
});

gulp.task('scripts', function(callback){
	webpack(require('./webpack.config.js'), function(err, stats){
		if (err){
			console.log(err.toString());
		}
		console.log(stats.toString());
		callback();
	});
});

gulp.task('scriptsRefresh', gulp.series('scripts', function(){
	browserSync.reload();
}));