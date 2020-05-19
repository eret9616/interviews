20180718
// 1.一道闭包题

function fun(n, o) {
    console.log(o);
    return {
        fun: function (m) {
            return fun(m, n);
        }
    };
}

var a = fun(0); a.fun(1); a.fun(2); a.fun(3);   //undefined 0 0 0 

var b = fun(0).fun(1).fun(2).fun(3);  //undefined 0 1 2 

var c = fun(0).fun(1); c.fun(2); c.fun(3); //undefined 0 1 1


// 2.css中可以继承的属性：1.字体属性(font-family等) 2.文本相关属性(line-height,letter-spacing等) 3.元素可见性

// 3.get和post的区别 GET 是幂等的 多次执行后和一次执行一样 GET 会被缓存，能添加到浏览器标签中，在浏览器记录中 GET 浏览器对其有长度限制 GET 的请求出现在URL中 (POST的出现在请求体中)