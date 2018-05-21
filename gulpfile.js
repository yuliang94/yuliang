var gulp=require('gulp');
var connect=require('gulp-connect');
var sass=require('gulp-sass');




gulp.task('connect',function(){//新建一个任务
	connect.server({//配置连接服务器
		port:8888,
		livereload:true//自动刷新
	});
});

gulp.task('sass',function(){
	gulp.src('sass/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('css'))
	
})

gulp.task('html',function(){
	gulp.src(['index.html','css/*.css','js/new_file.js','sass/*.scss'])//引入的文件路径
	.pipe(connect.reload());//自动刷新的方法
});

gulp.task('watch',function(){//监听
	gulp.watch(['index.html','css/*.css','js/new_file.js','sass/*.scss'],['html','sass']);
});


//执行的任务
gulp.task('default',['connect','watch']);