// generated on 2015-08-02 using generator-gulp-webapp 1.0.3
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import del from 'del';
import vinylPaths from 'vinyl-paths';
import {stream as wiredep} from 'wiredep';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('styles', () => {
  return gulp.src('app/styles/*.less')
    .pipe($.sourcemaps.init())
    .pipe($.less({paths: ['.']}))
    .pipe($.autoprefixer({browsers: ['last 1 version']}))
    .pipe($.minifyCss({compatibility: '*'}))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./app/styles/css'))
    .pipe(gulp.dest('dist/styles/css'))
    .pipe(reload({stream: true}));
});

gulp.task('html', ['index', 'styles'], () => {
  const assets = $.useref.assets({searchPath: ['.tmp', 'app', '.']});

  gulp.src(['app/scripts/**/*.js'])
    .pipe($.uglify())
    .pipe(gulp.dest('dist/scripts'));

  return gulp.src('app/*.html')
    .pipe(assets)
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.minifyCss({compatibility: '*'})))
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.if('*.html', $.minifyHtml({conditionals: true, loose: true})))
    .pipe(gulp.dest('dist'));
});

gulp.task('images', () => {
  return gulp.src('app/images/**/*')
    .pipe($.if($.if.isFile, $.cache($.imagemin({
      progressive: true,
      interlaced: true,
      // don't remove IDs from SVGs, they are often used
      // as hooks for embedding and styling
      svgoPlugins: [{cleanupIDs: false}]
    }))
      .on('error', function(err) {
        console.log(err);
        this.end();
      })))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', () => {
  return gulp.src(require('main-bower-files')({
    filter: '**/*.{eot,svg,ttf,woff,woff2}'
  }).concat('app/fonts/**/*'))
    .pipe(gulp.dest('.tmp/fonts'))
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('extras', () => {
  return gulp.src([
    'app/*.*',
    '!app/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

gulp.task('clean', del.bind(null, ['./app/styles/css', '.tmp', 'dist']));

gulp.task('index', ['styles'], function() {
  var target = gulp.src('./app/index.html');
  var sources = gulp.src(['app/scripts/**/*.js','app/**/*.css'], {read: false});

  return target.pipe($.inject(sources, {relative: true}))
    .pipe(gulp.dest('./app'));
});

gulp.task('serve', ['styles', 'fonts'], () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['app', '.tmp'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch([
    'app/*.html',
    'app/scripts/**/*.js',
    'app/images/**/*',
    '.tmp/fonts/**/*'
  ]).on('change', reload);

  gulp.watch('app/styles/**/*.less', ['styles', reload]);
  gulp.watch('app/fonts/**/*', ['fonts']);
  gulp.watch('bower.json', ['wiredep', 'fonts']);
});

gulp.task('serve:dist', () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['dist']
    }
  });
});

// inject bower components
gulp.task('wiredep', () => {
  gulp.src('app/styles/*.less')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(gulp.dest('app/styles'));

  gulp.src('app/*.html')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('app'));
});

gulp.task('build', ['html', 'images', 'fonts', 'extras'], () => {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('deploy', ['clean', 'build'], function () {
  return gulp.src('dist')
    .pipe($.subtree())
    .pipe(vinylPaths(del));
});

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});
