const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json'); 
const liteserver = require('lite-server');
const sourcemaps = require('gulp-sourcemaps');
const inject = require('gulp-inject');//not using
const sass = require('gulp-sass');
//const sass = require('gulp-ruby-sass');
var insertLines = require('gulp-insert-lines'); 
var gulpTypings = require("gulp-typings");
//const createFile = require('create-file');
var config = {
    bootstrapDir: './node_modules/bootstrap-sass',
    publicDir: './public',
    source: './app',//need to change 
    dest: './app',
    fontIn: ['./node_modules/bootstrap-sass/assets/fonts/**/*'],
    fontOut: './app/fonts'
};


// clean the contents of the distribution directory
gulp.task('clean', function () {
  return del('dist/**/**/*');
});

// TypeScript compile
gulp.task('compile', ['clean','installTypings'], function () {
  return gulp
    .src('./app/ts/**/*.ts')
    //.pipe(typescript(tscConfig.compilerOptions))
    .pipe(typescript(
			{
			    "target": "ES5",
			    "module": "system",
			    "moduleResolution": "node",
			    "sourceMap": true,
			    "emitDecoratorMetadata": true,
			    "experimentalDecorators": true,
			    "removeComments": false,
			    "noImplicitAny": false,
			    "outDir": "./app/js/"
			  }
        	))
    //.pipe(sourcemaps.write())
    //.pipe(gulp.dest('dist/app'));
     .pipe(gulp.dest('app/js'));
});


gulp.task("installTypings",function(){
    gulp.src("./typings.json")
        .pipe(gulpTypings()); //will install all typingsfiles in pipeline. 
});






gulp.task('build-style', ['icons','fonts','app-sass']);
// fonts


gulp.task('app-sass',function(){
  return gulp.src('./app/sass/**/*.scss')
    .pipe(
      sass(
        {
          inludePaths:[config.bootstrapDir + '/assets/stylesheets']
        }
        )
      )
    .pipe(gulp.dest('./app/css'));
});


gulp.task('watch-app-sass',function(){
  return gulp.watch('./app/sass/**/*.scss',['app-sass']);
});




gulp.task('icons', function() { 
    return gulp.src('./node_modules/bootstrap-sass/assets/fonts/**/*') 
        .pipe(gulp.dest('./app/fonts')); 
});

gulp.task('fonts', function() { 
    return gulp.src('./fonts/**/*') 
        .pipe(gulp.dest('./app/fonts')); 
});




gulp.task('watch', function(){
	return gulp.watch('app/ts/**/*.ts',['compile'])

});

gulp.task('serve',function(){
	liteserver;
})

gulp.task('build', ['compile']);
gulp.task('default', ['build','build-style','serve','watch','watch-app-sass']);



