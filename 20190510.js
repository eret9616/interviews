1.重绘与回流:


重绘:页面样式重新绘制
回流:DOM结构改变骨架改变了,会引起重绘

页面的显示过程分为以下几个阶段：
1、生成DOM树(包括display:none的节点)
2、在DOM树的基础上  根据节点的css属性 生成render树
(不包括display:none，包括visibility:hidden)
3、在render树基础上渲染颜色背景色等样式

reflow:
当render树的一部分或者全部因为大小边距等问题发生改变而需要重建的过程，
叫做回流

repaint:
当诸如颜色背景等不会引起页面布局变化，
而只需要重新渲染的过程叫做重绘

通过上述定义，可以很明显看出，重绘的代价要比回流小，毕竟重绘只涉及样式的改变，不涉及到布局。
重绘就好像给人染了一个头发，而回流相当于给人做了一次抽脂手术


display:none和visibility：hidden会产生回流与重绘吗？

display：none指的是元素完全不陈列出来，不占据空间，涉及到了DOM结构，故产生reflow与repaint

visibility：hidden指的是元素不可见但存在，保留空间，不影响结构，故只产生repaint



2.js实现sleep效果:

function sleep(ms){
   return new Promise(
       (resolve) => {
             setTimeout(resolve,ms)
         })
}

sleep(500).then(function(){
    console.log(222)
})


3.如何在JavaScript中实现继承:

function father(name){
this.name = name
}

let father = new father()

function Son(name){
father.call(this,name)
}

Son.prototype = Object.create(father.prototype)

Son.prototype.constructor = Son

new Son('儿子')

 

Object.create的内部原理:

Object.create =  function (o) {

    var F = function () {};
  　// 这里给函数prototype属性赋值
    F.prototype = o;
　　// 这个prototype属性给new操作符使用
    return new F();
};