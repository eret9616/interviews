1.js中的基本数据类型 null undefined string number boolean symbol
共六种


2.cookies是服务器发送给浏览器的文件，用于下次会话时保持一些特定信息。 session是保存在服务器本地的文件, 用于下次会话时保持一些特定信息。

localStorage是保存在浏览器本地的文件，永久性的保存一些特定信息（localStorage.setItem localStorage.getItem）。
sessionStorage是保存在浏览器的本地的文件,
  sessionStorage是在同源同tab中始终存在的数据，也就是说只要这个浏览器 tab没有关闭，即使刷新页面或进入同源另一个页面，数据仍然存在。


3.(function () {

  var a = b = 3;

})();

console.log(b); //3 
console.log(typeof a); //undefined 
console.log(typeof b); //number 
console.log(a); //a is not defined

相当于 var a   // 声明一个本地变量
a = b = 3

先执行 b = 3 这个赋值操作，会在当前作用域链找b，如果没有找到最终会在全局创建一个b
自执行函数执行完后a被销毁掉了


4.'use strict'有什么优点 ?
  https ://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode
  举几个：
1.不能使用with(){ }
2.{ a: 1, b: 2, a: 3 } 这样同属性后面覆盖前面来赋值的操作不允许
3.(function () { f = 1 })() 这样给未声明的变量赋值不允许



5.写一个multiply方法： multiply(2, 3); //Outputs 6 multiply(2)(3); //Outputs 6 函数的柯里化：

//1.用到fn.toString=function(){..} 来判断最后一次，因为最后一次返回了fn本身。注意不能使用arguments===0,因为如果使用arguments===0是需要最后传一个空参()

function multiply() {

  var arr = [...arguments]

  var fn = function () {
    arr = [...arr, ...arguments]
    return fn; // 返回自己
  }

  fn.toString = function () { // 如果最后没有()操作符了，那么开始计算并返回
    return arr.reduce((x, y) => x * y);
  }

  return fn; // 返回fn
}

console.log(multiply(2, 3));  //Outputs 6


6.javascript怎么获取页面上被选中的checkbox

var myinputs = document.getElementsByTagName('input'); var arr = [];

for (let i = 0; i < myinputs.length; i++) {
  if (myinputs[i].type == 'checkbox' && myinputs[i].checked) { // 注意，对于input标签的type属性不需要进行.getAttribute('type')，直接.type可以拿到
    arr.push(myinputs[i]);
  }
}

额外知识: label标签 for= "//for属性中这里写的是input的ID才能联动"



7.flex - grow: 默认值是0; 设置1, 2...多个小内容按比例排 flex - shrink: 默认值是1; 设为0后则不缩小。



8.脑残题
Boolean([]) //true; 
Boolean({}) //true; 


[] == ![] //true
// 1. 在比较时 先计算右边，[]是true !true是false, 最终在比较时被转为0
// 2. 比较string、number和引用类型时，会调用引用类型的toString 于是[].valueOf 变成了''
// 3. 判断'' == 0， 所以返回true

{} == !{} // false
// 1. 在比较时 先计算右边，{}是true !true是false，最终最比较时被转为0
// 2. 比较string、number和引用类型时，会调用引用类型的toString 于是{}.toString 变成了'[object Object]'
// 3. 判断'[object Object]' == 0， 所以返回false


9.let a = {}; let b = { key: 'b' }; let c = { key: 'c' };

a[b] = '这是b'; a[c] = '这是c';

console.log(a[b]); // 这是c

因为js中对象只能是键 - 值的形式，其中的键是一个字符串。

当 a[b] = '这是b'的时候

相当于 a = { '[object Object]': '这是b' } // 这里面调的是b.toString()

当 a[c] = '这是c'的时候

相当于 a = { '[object Object]': '这是c' }

最后读取的时候，相当于是在读取a['object Object']

解决这个问题，可以用到es6中的Map结构, map中的键可以是任何类型

let a = new Map(); let b = { key: 'b' }; let c = { key: 'c' };

a.set(b, '这是b'); a.set(c, '这是c');

console.log(a.get(b)); //这是b
