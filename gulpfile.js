/**
*   Nominee Gulpfile                               
*   Author : Chris Hare                                             
*   Site Name : COE                                                                               
**/

const { src, dest, task, watch, series, parallel } = require('gulp');
const del = require('del'); //For Cleaning build/dist for fresh export
const options = require("./config"); //paths and other options from config.js
const browserSync = require('browser-sync').create();

const sass = require('gulp-sass')(require('sass')); //For Compiling SASS files
const postcss = require('gulp-postcss'); //For Compiling tailwind utilities with tailwind config
const concat = require('gulp-concat'); //For Concatinating js,css files
const uglify = require('gulp-terser');//To Minify JS files
const imagemin = require('gulp-imagemin'); //To Optimize Images
const cleanCSS = require('gulp-clean-css');//To Minify CSS files
const purgecss = require('gulp-purgecss');// Remove Unused CSS from Styles


//Note : Webp still not supported in majpr browsers including forefox
//const webp = require('gulp-webp'); //For converting images to WebP format
//const replace = require('gulp-replace'); //For Replacing img formats to webp in html
const logSymbols = require('log-symbols'); //For Symbolic Console logs :) :P 

var url = 'http://localhost/coe/dist/web';

//Load Previews on Browser on dev
function livePreview(done){
  browserSync.init({
		proxy: url,
	});
  done();
} 

// Triggers Browser reload
function previewReload(done){
  console.log("\n\t" + logSymbols.info,"Reloading Browser Preview.\n");
  browserSync.reload();
  done();
}


function devExternalStyles(){
  const tailwindcss = require('tailwindcss'); 
  return src(`${options.paths.src.css}/**/external/*`).pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      tailwindcss(options.config.tailwindjs),
      require('autoprefixer'),
    ]))
    .pipe(concat({ path: 'external.css'}))
    .pipe(dest(options.paths.dist.css));
}

function devStyles(){ 
  return src(`${options.paths.src.css}/**/*.scss`).pipe(sass().on('error', sass.logError))
    .pipe(concat({ path: 'style.css'}))
    .pipe(dest(options.paths.dist.css));
}

function devScripts(){
  return src([
    `${options.paths.src.js}/libs/**/*.js`,
    `${options.paths.src.js}/**/*.js`,
    `!${options.paths.src.js}/**/external/*`
  ]).pipe(concat({ path: 'scripts.js'})).pipe(dest(options.paths.dist.js));
}

function devExternalScripts(){
  return src([
    `${options.paths.src.js}/**/external/*`
  ]).pipe(concat({ path: 'external.js'})).pipe(dest(options.paths.dist.js));
}

function devImages(){
  return src(`${options.paths.src.img}/**/*`)
  // .pipe(imagemin())
  .pipe(dest(options.paths.dist.img));
}

function watchFiles(){
  watch('dist/templates/**/*.+(html|twig)',series(previewReload));
  watch([options.config.tailwindjs, `${options.paths.src.css}/**/*`],series(devStyles, previewReload));
  watch([options.config.tailwindjs, `${options.paths.src.css}/**/external/*`],series(devExternalStyles, previewReload));
  watch(`${options.paths.src.js}/**/*.js`,series(devScripts, previewReload));
  watch(`${options.paths.src.js}/**/*.js`,series(devExternalScripts, previewReload));
  console.log("\n\t" + logSymbols.info,"Watching for Changes..\n");
}

function devClean(){
  console.log("\n\t" + logSymbols.info,"Cleaning dist folder for fresh start.\n");
  return del([options.paths.dist.css, options.paths.dist.js]); 
}



exports.default = series(
  devClean, // Clean Dist Folder
  parallel(devStyles, devExternalStyles, devScripts, devExternalScripts), //Run All tasks in parallel
  livePreview, // Live Preview Build
  watchFiles // Watch for Live Changes
);
