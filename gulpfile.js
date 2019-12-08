var gulp = require('gulp');

var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
var rename = require('gulp-rename');

var filename = 'icon';

gulp.task('Iconfont', function(){
    return gulp.src(['icons/*.svg'])
        .pipe(iconfont({
             fontName: filename,
             //prependUnicode: true,
             formats: ['ttf', 'eot', 'woff','woff2' , 'svg' ]
            }))
        .on('glyphs', function(glyphs, options) {
            
            let consolidateOptions = {
                glyphs: glyphs,
                fontName: filename,
                fontPath: '../fonts/',
                className: 'ico'
            }

            gulp.src('temp/css.ejs')
                .pipe(consolidate('lodash', consolidateOptions))
                .pipe(rename( { basename: filename , extname: '.css'} ) )
                .pipe(gulp.dest('src/css/'));

            gulp.src('temp/html.ejs' )
                .pipe(consolidate( 'lodash', consolidateOptions))
                .pipe( rename( { basename: filename , extname: '.html'}))
                .pipe( gulp.dest( 'src/' ) );
        })
        .pipe(gulp.dest('src/fonts/'));
});



