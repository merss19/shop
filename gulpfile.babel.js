import gulp from 'gulp'
import plumber from 'gulp-plumber'
import errorHandler from 'gulp-plumber-error-handler'
import stylus from 'gulp-stylus'
import sourcemaps from 'gulp-sourcemaps'
import postcss from 'gulp-postcss'
import jade from 'gulp-jade'
import pugLint from 'gulp-pug-lint'
import prettify from 'gulp-jsbeautifier'
import browserSync from 'browser-sync'
import notify from 'gulp-notify'
import stylint from 'gulp-stylint'
import  csslint from 'gulp-csslint'
import svgSprite from 'gulp-svg-sprite'
import  gulpIf from 'gulp-if'
import postcssSorting from 'postcss-sorting'
import babel from 'gulp-babel'
import jshint from 'gulp-jshint'
import sorting  from 'postcss-sorting'
import clean from 'gulp-clean'
import  gcmq from 'gulp-group-css-media-queries'
import stylish from 'jshint-stylish'
import svgstore from 'gulp-svgstore'
import svgmin from 'gulp-svgmin'
import path from 'path'
import sass from 'gulp-sass'
import data from 'gulp-data'
import  concat from  'gulp-concat'
import autoprefixer from 'gulp-autoprefixer'
import sassGlob from 'gulp-sass-glob'

gulp.task('svgstore', function () {
    return gulp
        .src('src/svg/*.svg')
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest('dist/assets/img/svg'));
});


const bs = require("browser-sync").create();


// css tasks
/*gulp.task('css', () => {
    gulp.src('src/styles/!*.styl')
        .pipe(plumber({errorHandler: errorHandler(`Error in \'css\' task`)}))
        .pipe(sourcemaps.init())
        .pipe(stylus({
            'include css': true
        }))
        .on('error', notify.onError())
        .pipe(postcss(processors))
        .pipe(gcmq())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/assets/css'))
})*/
// styles:lint tasks
/*gulp.task('styles:lint', () => (
    gulp.src('src/blocks/!**!/!*.styl')
        .pipe(stylint({
            reporter: 'stylint-stylish',
            reporterOptions: {verbose: true}
        }))
        .pipe(stylint.reporter())
));*/
    gulp.task('css', () => {
     gulp.src('src/styles/app.scss')
     .pipe(sassGlob())
     .pipe(plumber({errorHandler: errorHandler(`Error in \'css\' task`)}))
     .pipe(sourcemaps.init())
     .pipe(sass({
     'include css': true
     }))
     .on('error', notify.onError())
     .pipe(autoprefixer({
         browsers: ['last 2 versions']
     }))
     .pipe(gcmq())
     .pipe(sourcemaps.write())
     .pipe(gulp.dest('dist/assets/css'))
     })

// css:lint tasks
gulp.task('csslint', function() {
    gulp.src('dist/css/app.css')
        .pipe(csslint('.csslintrc'))
        .pipe(csslint.formatter(require('csslint-stylish')))
});
var fs = require('fs');
// templates tasks
gulp.task('templates', () => (
    gulp.src('src/pages/*.jade')
        .pipe(plumber({errorHandler: errorHandler(`Error in \'templates\' task`)}))
        .pipe(data(function(file) {
           /* console.log('path.basename(file.path)')
            console.log(path.basename)
            console.log(file.path)
            console.log(path.basename(file.path))
            console.log('end')*/
            return require('./src/data/data.json');
        }))
        .pipe(jade())
        .pipe(prettify({
            braceStyle: 'expand',
            indentWithTabs: true,
            indentInnerHtml: true,
            preserveNewlines: true,
            endWithNewline: true,
            wrapLineLength: 120,
            maxPreserveNewlines: 50,
            wrapAttributesIndentSize: 1,
            unformatted: ['use']
        }))
        .on('error', (err) =>{
            console.log(err)
        })
        .pipe(clean('dist/index.html'))
        .pipe(gulp.dest('dist/'))
        .on('end', function() {
            console.log('succssee');
        })
));

// templates:lint
gulp.task('templates:lint', () =>
    gulp
        .src('src/{blocks,pages}/**/*.jade')
        .pipe(pugLint())
);

// svg tasks
gulp.task('svgSprite', function() {
    gulp.src('src/svg/*.svg')
        .pipe(svgSprite({
            shape:{
                spacing: {
                    padding: 2
                }
            },
            mode:{
                css:{
                    dest:'.',
                    sprite:'sprite.svg',
                    layout:'vertical',
                    prefix:'.svg-',
                    dimensions:true,
                    render:{
                        styl:{
                            dest:'sprite.styl'
                        }
                    }
                }
            }
        }))
        .pipe(gulpIf('*.styl',gulp.dest('src/styles/helper'),gulp.dest('dist/assets/css')))
});

// copy tasks
gulp.task('copy', function() {
    gulp.src('src/assets/**/*')
    .pipe(gulp.dest('dist/assets'))
});



var webpack = require('gulp-webpack');

gulp.task('webpackJS', function() {
    return gulp.src('src/js/main.js')
        .pipe(webpack({
            watch:true,
            output:{
                filename: 'main.js'
            },
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        loader: 'babel-loader',
                        exclude: /node_modules/
                    }
                ]
            }

        }))
        .pipe(gulp.dest('dist/assets/js'));
});


// js tasks
gulp.task('js', function() {
    gulp.src('src/js/main/*.js')
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(gulp.dest('dist/assets/js'))
});
gulp.task('watch', () => {
    gulp.watch('src/svg/*.svg', ['svgSprite']);
    gulp.watch('src/js/main/*.js', ['webpackJS']);
    gulp.watch('src/{pages,blocks}/**/*.jade', ['templates','templates:lint'])
    gulp.watch('src/data/data.json', ['templates','templates:lint']);
    gulp.watch('src/{styles,blocks}/**/*.scss', ['csslint','css']);

});


gulp.task('browser-sync', () => {
    var files = [
        'dist/**/*.*'
    ];

    bs.init(files,{
        reloadOnRestart: true,
        open:true,
        snippetOptions: {
            rule: {
                match: /<\/body>/i
            }
        },
        port: 3000,
        server: {
        baseDir: './dist/'
        }
    });

    //bs.watch('dist/**/*.*').on('change', bs.reload);

});

gulp.task('default', [
    'copy',
    'svgstore',
    'webpackJS',
    'svgSprite',
    'csslint',
    'css',
    'templates:lint',
    'templates',
    'watch',
    'browser-sync'

]);
