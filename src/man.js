var moduleA=require('./a.js')
var moduleB=require('./b.js')
moduleA.aa();
moduleA.aa1();
moduleB.bb();

function min(){
	 console.log('来自man的方法');
}

min();

require('./css/style.css');