1.js中的基本数据类型 null undefined string number boolean symbol 
共六种

cookies是服务器发送给浏览器的文件，用于下次会话时保持一些特定信息。 session是保存在服务器本地的文件,用于下次会话时保持一些特定信息。

localStorage是保存在浏览器本地的文件，永久性的保存一些特定信息（localStorage.setItem localStorage.getItem）。 sessionStorage是保存在浏览器的本地的文件,sessionStorage是在同源同窗口中始终存在的数据，也就是说只要这个浏览器 窗口没有关闭，即使刷新页面或进入同源另一个页面，数据仍然存在。

(function(){

var a=b=3;

})();

console.log(b); //3 console.log(typeof a); //undefined console.log(typeof b); //number console.log(a); //a is not defined

因为a是局部变量，b是全局变量。js就是这么蠢。。

4.'use strict'有什么优点? 在语法检测时发现语法问题，则使整个代码块失效，并导致一个语法异常。 先声明再定义...这些类似的要求。

5.写一个multiply方法： multiply(2,3); //Outputs 6 multiply(2)(3); //Outputs 6 函数的柯里化：

//1.通过递归arguments.callee //2.用到fn.toString=function(){..} 来判断最后一次，因为最后一次返回了fn本身。注意不能使用arguments===0,因为如果使用arguments===0则需要最后传一个空参()

  function multiply(){

  var arr = [].slice.call(arguments);

  var fn = function(){

  arr=arr.concat([].slice.call(arguments));

  return fn;

}
  
  fn.toString = function(){

  return arr.reduce((x,y)=>x*y);  
}

return fn;

}

console.log(multiply(2,3));  //Outputs 6
6.javascript怎么获取页面上被选中的checkbox

注意:label for="//这里写的是checkbox的ID才能联动"

var myinputs = document.getElementsByTagName('input'); var arr = [];

for(let i=0;i<myinputs.length;i++) { if(myinputs[i].checked && myinputs[i].type=='checkbox') arr.push(myinputs[i]); }



7.flex-grow:默认值是0; 设置1,2...多个小内容按比例排 flex-shrink:默认值是1; 设为0后则不缩小。

脑残题 Boollean([]) //true; Boollean({}) //true; [] //false; []=![] //true

let a = {}; let b = {key:'b'}; let c = {key:'c'};

a[b]='这是b'; a[c]='这是c';

console.log(a[b]); // 这是c

因为js中对象只能是键-值的形式，其中的键是一个字符串。

当 a[b]='这是b'的时候

相当于 a={ '[Object Object]':'这是b' }

当 a[c]='这是c'的时候

相当于 a={ '[Object Object]':'这是c' }

最后读取的时候，相当于是在读取a[Object Object]

解决这个问题，可以用到es6中的Map结构,map中的键可以是任何类型

let a = new Map(); let b = {key:'b'}; let c = {key:'c'};

a.set(b,'这是b'); a.set(c,'这是c');

console.log(a.get(b)); //这是b console.log(a);
