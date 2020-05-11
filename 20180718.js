20180718
//一道闭包题

function fun(n,o) { console.log(o); return { fun:function(m) { return fun(m,n); } }; }

//undefined 0 0 0 var a = fun(0); a.fun(1); a.fun(2); a.fun(3);

//undefined 0 1 2 var b = fun(0).fun(1).fun(2).fun(3);

//undefined 0 1 1 var c = fun(0).fun(1); c.fun(2); c.fun(3);

解：当赋值后a是一个对象

function fun(n, o) { console.log(o); return { fun: function (m) { return fun(m, n) } } }

var b = fun(0).fun(1).fun(2).fun(3);

//css中可以继承的属性 文本相关属性 text- 列表相关属性 li

//get和post的区别 GET 是幂等的 多次执行后和一次执行一样 GET 会被缓存，能添加到浏览器标签中，在浏览器记录中 GET 浏览器对其有长度限制 GET 的请求出现在URL中 (POST的出现在请求体中)