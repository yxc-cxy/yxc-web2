// 如何解决命名冲突和变量污染问题：
// 立即执行函数表达式
// (function(){

// })();
// 语法：  (函数体)(参数,参数2...)
// 
// 可以有自己的私有变量和私有函数，封闭空间，在里面可以写正常的代码
// var moduleA=(function(){
    // 写了私有变量和函数，可以将想要暴露出去的方法通过return暴露出去
	
	

			var a=10;
			var b=5;
			function aa(){
				console.log("来自a.js");
			}
			function aa1(){
				console.log("来自a11111.js");
			}
			// 接口
			// 将想要对外提供的方法和属性通过该接口暴露出去
			aa();
			aa1()
			module.exports={
				a,
				aa,
				aa1
			};
	
// })();
// fun();