/**
 * Compiles LESS files into CSS.
 *
 * ---------------------------------------------------------------
 *
 * Only the `assets/styles/importer.scss` is compiled.
 * This allows you to control the ordering yourself, i.e. import your
 * dependencies, mixins, variables, resets, etc. before other stylesheets)
 *
 */
module.exports = function(gulp, plugins, growl) {

	gulp.task('rubySass:dev', function() {
		return gulp.src('assets/styles/importer.scss')
				.pipe(
					plugins.rubySass({
						sourcemapPath: '.tmp/public/styles/'
					})
				)
				.pipe(gulp.dest('.tmp/public/styles/'))
				.pipe(plugins.if(growl, plugins.notify({ message: 'sass dev task complete' })));
	});
};
