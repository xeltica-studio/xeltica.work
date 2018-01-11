const gulp = require('gulp')
const browserSync = require('browser-sync')
const map = require('map-stream')
const source = require('vinyl-source-stream')

const pug = require('gulp-pug')
const layout = require('gulp-layout')
const markdown = require('gulp-markdown')
const highlight = require('highlight.js')

const less = require('gulp-less')
const postcss = require('gulp-postcss')
const cssnext = require('postcss-cssnext')

const browserify = require('browserify')
const babelify = require('babelify')

const rework = require("gulp-rework")
const reworkNpm = require("rework-npm")

const stylus = require("gulp-stylus")
const sass = require("gulp-sass")

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

// Copy Static Assets
gulp.task('build:static',
  async () => gulp.src(['src/static/**'], {base: 'src'})
              .pipe(gulp.dest('dist/'))
)

// Pug Build
gulp.task('build:pug',
  async () => gulp.src(['src/**/[^_]*.pug'])
              .pipe(pug(pugOptions))
              .pipe(gulp.dest('dist/'))
)
// Markdown Build
gulp.task('build:markdown',
  async () => gulp.src(['src/**/*.md'])
              .pipe(markdown(markedOptions))
              .pipe(layout({
                title: 'markdown',
                layout: 'src/_md-template.pug',
              }))
              .pipe(gulp.dest('dist/'))
)

// less Build
gulp.task('build:less',
  async () => gulp.src(['src/**/[^_]*.less'])
              .pipe(less(lessOptions))
              .pipe(postcss([
                cssnext(cssnextOptions)
              ]))
              .pipe(gulp.dest('dist/'))
)

// Stylus Build
gulp.task('build:stylus', 
  async() => gulp.src(['src/**/[^_]*.styl'])
              .pipe(stylus(stylusOptions))
              .pipe(postcss([
                cssnext(cssnextOptions)
              ]))
              .pipe(gulp.dest('dist/'))
)

// Sass Build
gulp.task('build:sass',
  async() => gulp.src(['src/**/[^_]*.s[ac]ss'])
              .pipe(sass(sassOptions))
              .pipe(postcss([
                cssnext(cssnextOptions)
              ]))
              .pipe(gulp.dest('dist/'))
)

// JavaScript Build
gulp.task('build:js', async () => {
  const processor = (file) => {
    browserify(file.path, browserifyOptions)
      .transform(babelify, babelOptions)
      .bundle()
      .on('error', (err) => console.error(`Error: ${err.message}`))
      .pipe(source(file.path.replace(file.base, '')))
      .pipe(gulp.dest('dist/'))
  }

  return gulp.src(['src/**/[^_]*.js'])
          .pipe(map(a => processor(a)))
})

// CSS Build
gulp.task('build:css', gulp.parallel(
  'build:stylus',
  'build:less',
  "build:sass",
))

// All Build
gulp.task('build', gulp.parallel(
  'build:pug',
  'build:markdown',
  'build:css',
  'build:js',
  'build:static',
))

// Browser Sync
gulp.task('watch',
  gulp.series('build', async () => {
    browserSync({
      server: {
        baseDir: './dist'
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
