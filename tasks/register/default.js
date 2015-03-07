module.exports = function (gulp, plugins) {
	gulp.task('default', function(cb) {
		plugins.sequence(
            'copy:vendor',
			'compileAssets',
			['images', 'linkAssets'],
			['watch:api', 'watch:assets'],
			cb
		);
	});
};
