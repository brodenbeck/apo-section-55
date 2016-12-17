var gulp            = require( 'gulp' );
var sass            = require( 'gulp-sass' );
var concat_js       = require( 'gulp-concat' );
var autoprefixer    = require( 'gulp-autoprefixer' );
var minify_js       = require( 'gulp-uglify' );
var rename          = require( 'gulp-rename' );

var sass_options = {
    
    errLogToConsole: true,
    outputStyle: 'expanded'
};

var autoprefixer_options = {
    
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task( 'default', ['sass', 'scripts'] );

gulp.task( 'sass', function() {

    return gulp
        .src( 'src/sass/app.scss')
        .pipe( sass() )
        .pipe( sass( sass_options ).on( 'error', sass.logError ) )
        .pipe( autoprefixer( autoprefixer_options ) )
        .pipe( gulp.dest( 'public/css' ) );
});

gulp.task( 'scripts', function() {
    
    return gulp
        .src( 'src/js/**/*.js' )
        .pipe( concat_js( 'app.js' ) )
        .pipe( gulp.dest( 'src/temp' ) )
        .pipe( rename( 'app.min.js' ) )
        .pipe( minify_js() )
        .pipe( gulp.dest( 'public/js' ) );
});

gulp.task( 'watch', function() {

    gulp.watch( 'js/*.js', ['lint', 'scripts'] );
    gulp.watch( 'scss/*.scss', ['sass'] );
});
