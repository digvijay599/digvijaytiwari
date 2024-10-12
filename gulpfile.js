import { src, dest, task, watch, series, parallel } from 'gulp';

// CSS related plugins
import gulpSass from 'gulp-sass';
import sassCompiler from 'sass';
import autoprefixer from 'gulp-autoprefixer';

// Utility plugins
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';

// Project related variables
var styleSRC     = './scss/style.scss';
var styleURL     = './css/';
var mapURL       = './';

const sass = gulpSass(sassCompiler);

function css(done) {
	src( [ styleSRC ] )
		.pipe( sourcemaps.init() )
		.pipe( sass({
			errLogToConsole: true,
			outputStyle: 'compressed'
		}) )
		.on( 'error', console.error.bind( console ) )
		.pipe( autoprefixer({ browsers: [ 'last 2 versions', '> 5%', 'Firefox ESR' ] }) )
		.pipe( rename( { suffix: '.min' } ) )
		.pipe( sourcemaps.write( mapURL ) )
		.pipe( dest( styleURL ) )
	done();
};

function watch_files() {
	watch(styleSRC, series(css));
}

task("css", css);
task("default", parallel(css));
task("watch", parallel(watch_files));
