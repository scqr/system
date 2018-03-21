const gulp = require('gulp');
const connect  = require('gulp-connect');
const rubySass = require('gulp-ruby-sass');
const minify = require("gulp-babel-minify");

// 编译Sass
gulp.task('sass', function () {
    return rubySass('./src/sass/*.scss', {
        // sourcemap: false,
        // style: 'compressed',
    }).pipe(gulp.dest('./assets/stylesheets/'));
});

gulp.task("minify", function () {
    gulp.src("./src/js/*.js")
    /*.pipe(minify({
        mangle: {
            keepClassName: true
        }
    }))*/
    .pipe(gulp.dest("./assets/javascripts/"));
});

//把img文件夹下所有的jpg文件复制到发布目录下
gulp.task("copy-jpg",function () {
    gulp.src("./img/*").pipe(gulp.dest("./assets/images/"));
});

//监听html文件
gulp.task("copy-html",function () {
    gulp.src("./*.html").pipe(gulp.dest("./assets/"));
});

// 自动刷新Html
gulp.task('html', ['sass', 'copy-jpg', 'minify'], function () {
    return gulp.src('./*.html').pipe(connect.reload());
});

// 监听
gulp.task('default', ['sass', 'copy-jpg', 'minify','copy-html'], function () {
    //开启服务器
    connect.server({
        port: 9001,
        livereload: true
    });
    gulp.watch('./img/*', ['html']);
    gulp.watch('./src/sass/*.scss', ['html']);
    gulp.watch('./src/js/*.js', ['html']);
});