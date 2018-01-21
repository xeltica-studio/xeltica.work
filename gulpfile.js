// Builder Core
const gulp = require('gulp')
const browserSync = require('browser-sync')
const del = require('del')

// HTML Processor
const pug = require('gulp-pug')
const layout = require('gulp-layout')
const markdown = require('gulp-markdown')
const highlight = require('highlight.js')
const frontMatter = require('gulp-front-matter')

// CSS Processor
const less = require('gulp-less')
const stylus = require("gulp-stylus")
const sass = require("gulp-sass")
const postcss = require('gulp-postcss')
const cssnext = require('postcss-cssnext')

// Javascript Processor
const map = require('map-stream')
const source = require('vinyl-source-stream')
const browserify = require('browserify')
const babelify = require('babelify')

// Configuration File
const conf = require('./lib/conf.js')

// Define Options
const pugOptions = {
  pretty: true
}
const markedOptions = {
  highlight: (code) => highlight.highlightAuto(code).value
}
const lessOptions = {}
const stylusOptions = {}
const sassOptions = {}
const cssnextOptions = {
  browsers: '> 1% in JP' // 日本でシェア1%以上
}
const browserifyOptions = {
  debug: true
}
const babelOptions = {
  presets: [
    ['env', {
      targets: {
        browsers: '> 1% in JP'
      }
    }]
  ]
}

const destination = conf.dest;

// Copy Static Assets
gulp.task('build:static',
  async () => gulp.src(['src/static/**'], {base: 'src'})
              .pipe(gulp.dest(destination))
)

// Build Pug
gulp.task('build:pug',
  async () => gulp.src(['src/**/[^_]*.pug'])
              .pipe(pug(pugOptions))
              .pipe(gulp.dest(destination))
)
// Build Markdown
gulp.task('build:markdown',
  async () => gulp.src(['src/**/*.md'])
              .pipe(frontMatter({
                property: 'meta'
              }))
              .pipe(markdown(markedOptions))
              .pipe(layout(file => ({
                title: file.meta.title ? file.meta.title : 'markdown',
                layout: 'src/_md-template.pug',
              })))
              .pipe(gulp.dest(destination))
)

// Build less
gulp.task('build:less',
  async () => gulp.src(['src/**/[^_]*.less'])
              .pipe(less(lessOptions))
              .pipe(postcss([
                cssnext(cssnextOptions)
              ]))
              .pipe(gulp.dest(destination))
)

// Build Stylus
gulp.task('build:stylus', 
  async() => gulp.src(['src/**/[^_]*.styl'])
              .pipe(stylus(stylusOptions))
              .pipe(postcss([
                cssnext(cssnextOptions)
              ]))
              .pipe(gulp.dest(destination))
)

// Build Sass
gulp.task('build:sass',
  async() => gulp.src(['src/**/[^_]*.s[ac]ss'])
              .pipe(sass(sassOptions))
              .pipe(postcss([
                cssnext(cssnextOptions)
              ]))
              .pipe(gulp.dest(destination))
)

// Build JavaScript
gulp.task('build:js', async () => {
  const processor = (file) => {
    browserify(file.path, browserifyOptions)
      .transform(babelify, babelOptions)
      .bundle()
      .on('error', (err) => console.error(`Error: ${err.message}`))
      .pipe(source(file.path.replace(file.base, '')))
      .pipe(gulp.dest(destination))
  }

  return gulp.src(['src/**/[^_]*.js'])
          .pipe(map(a => processor(a)))
})

// Build CSS
gulp.task('build:css', gulp.parallel(
  'build:stylus',
  'build:less',
  "build:sass",
))

// Build All
gulp.task('build', gulp.parallel(
  'build:pug',
  'build:markdown',
  'build:css',
  'build:js',
  'build:static',
))


// Clean All
gulp.task('clean', del.bind(null, [destination]))

// Rebuild All
gulp.task('rebuild', gulp.series(
  'clean',
  'build'
))

// Run with Debug
gulp.task('watch',
  gulp.series('build', async () => {
    browserSync({
      server: {
        baseDir: destination
      }
    })

    gulp.watch([
      'src/**/*.pug',
      'src/**/*.md',
      'src/**/*.less',
      'src/**/*.sass',
      'src/**/*.scss',
      'src/**/*.styl',
      'src/**/*.js',
    ], gulp.series(
      'build',
      async () => {
        console.log('build complete')
        browserSync.reload()
      }
    ))
  })
)
