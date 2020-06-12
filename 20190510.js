1.重绘与回流:

回流reflow: DOM结构改变骨架改变了, 会引起重新layout(计算各元素在浏览器位置), 之后进行样式渲染(paint)
重绘repaint: 页面样式重新绘制

页面的显示过程分为以下几个阶段：
1、生成DOM树, 生成CSS树
2、合并生成render树
3、计算各元素在浏览器视窗实际位置和大小 layout
3、在render树基础上渲染颜色背景色等样式  paint

reflow:
当render树的一部分或者全部因为大小边距等问题发生改变而需要重建的过程

repaint:
当诸如颜色背景等不会引起页面布局变化，
而只需要重新渲染的过程叫做重绘

通过上述定义，可以看出，重绘的代价要比回流小，重绘只涉及样式的改变，不涉及到布局(layout) 。


display: none和visibility：hidden会产生回流与重绘吗？

display：none指的是元素完全不陈列出来，不占据空间，涉及到了DOM结构，故产生reflow与repaint

visibility：hidden指的是元素不可见但存在，保留空间，不影响结构，故只产生repaint



2.js实现sleep效果:

function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    })
}

sleep(500).then(function () { // 还可以配合await使用
    console.log(222)
})


3.如何在JavaScript中实现继承:

function father(name) {
    this.name = name
}
let father = new father()

function Son(name) {
    father.call(this, name)
}
Son.prototype = Object.create(father.prototype)
Son.prototype.constructor = Son

new Son('儿子')



Object.create的内部原理:

Object.create = function (o) {

    let obj = {}
    obj.__proto__ = o
    return obj

    /*
      或者说是
        var F = function () {};
    　// 这里给函数prototype属性赋值
        F.prototype = o;
    　　// 这个prototype属性给new操作符使用
        return new F();
    */
};



f: log(){
    console.log(this);
}

log.call(obj, 1, 2, 3)




// js 实现 call

Function.prototype.call$$ = function (context, obj) {
    let functionSelf = this
    context.fun = functionSelf
    context.fun(obj)
    delete context.fun
}

let fun1 = function (arg1) {
    console.log(1);
    console.log(2);
    console.log(this); // expect obj
    console.log(arg1);
}

let obj = { a: 1, b: 2 }

fun1.call$$(obj, 15)
