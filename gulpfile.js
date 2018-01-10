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

const pugOptions = {
  pretty: false
}

const markedOptions = {
  highlight: (code) => highlight.highlightAuto(code).value
}

const lessOptions = {}

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

gulp.task('build:pug',
  async () => gulp.src(['src/**/[^_]*.pug'])
              .pipe(pug(pugOptions))
              .pipe(gulp.dest('dist/'))
)

gulp.task('build:markdown',
  async () => gulp.src(['src/**/*.md'])
              .pipe(markdown(markedOptions))
              .pipe(layout({
                title: 'markdown',
                layout: 'src/_md-template.pug',
              }))
              .pipe(gulp.dest('dist/'))
)

gulp.task('build:less',
  async () => gulp.src(['src/**/[^_]*.less'])
              .pipe(less(lessOptions))
              .pipe(postcss([
                cssnext(cssnextOptions)
              ]))
              .pipe(gulp.dest('dist/'))
)

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

gulp.task('build', gulp.parallel(
  'build:pug',
  'build:markdown',
  'build:less',
  'build:js'
))

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
      'src/**/*.js'
    ], gulp.series(
      'build',
      async () => {
        console.log('build complete')
        browserSync.reload()
      }
    ))
  })
)
