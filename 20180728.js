
//0.closure
var a = function () {

    let x = 1;

    function b() {
        return ++x
    }

    return b;
}

var c = a();
c();//2
c();//3
c();//4


//1.原生ajax:
//Ajax:

var a = new XMLHttpRequest()

a.onreadystatechange = function () {
    if (a.readyState == 4 && a.status == 200) {
        var r = a.responseText()
    }
}

a.open('Get', url, false) //false为异步

//2.数组去重

var a = [1, 2, 3]
var s = new Set(a)
var a = Array.from(s)

//3.http状态码

304 自从上次请求后，请求的网页未修改过。(缓存)
415  不支持的媒体类型
500 服务器内部错误

//4.函数柯里化
/*
实现
 add(1)(2)(2,3)  
 add(1,2,34)
 add(1)(2,3,4)
 */

function currying() {

    var arr = [].slice.call(arguments)

    var fn = function () {
        arr = arr.concat([].slice.call(arguments));
        return fn
    }

    //最后一次递归调用fn的时候返回了fn函数本身，相当于fn.toString
    fn.toString = function () {
        return arr.reduce((x, y) => x + y)
    }

    return fn

}


//5.
overflow: hidden;
text - overflow: ellipsis; //带省略号的修剪
white - space: nowrap; //规定如何处理元素中的空白，nowrap就是不换行，即使到了浏览器的最右边也不换行
word - wrap: break-word; //让一个DIV里的元素换到下一行

//6.proxy
let book = { 'name': '<ES6 基础>', 'price': 56 };
let proxy = new Proxy(book, {
    get(target, property) {
        if (property == 'name') {
            return '哈哈 不告诉你'
        }
    }
})

Object.defineProperty(book, 'name', {
    get: function () {
        return 'haha'
    }
})



// Vue双向绑定
var Book = {}

Object.defineProperty(Book, 'name', {
  set: function (value) {
    console.log('你取了一个书名叫做' + value);
  },
  get: function () {
    return '《' + Book.name + '》'
  }
})
 
Book.name = 'vue权威指南';  // 你取了一个书名叫做vue权威指南
console.log(Book.name);  // 《vue权威指南》



//7.判断是否是随机数
isNaN('23'); false //这里是个坑，即时是字符串也被转成了数字来判断

new RegExp(/\d+/g).test('s2d') //true

//8.生成[a,b)间的随机数
function generate(a, b) {

    return Math.floor(Math.random() * (b - a) + a)

}

//9.选择器
div[class*= test]

div的class中带test

//10快速排序

var myarr = [2, 4, 5, 1, 6];


function quicksort(left, right, arr) {

    var i, j, t, temp; //声明7个变量..


    if (left > right) {
        return;
    }               //如果排完了，就不排了



    i = left;
    j = right;
    temp = arr[left];  //左边是i 右边是j 最左边的设为temp

    while (i != j)       //当i不为j的时候，j从右往左找到小于temp的停下
    //i从作往右找找到大于temp的停下，如果i小于j进行交换
    {
        while (arr[j] >= temp && i < j) {
            j--;
        }
        while (arr[i] <= temp && i < j) {
            i++;
        }

        if (i < j) {
            t = arr[j];
            arr[j] = arr[i];
            arr[i] = t;
        }
    }

    //如果i等于j，则这一次排完了，进行交换
    arr[left] = arr[i];
    arr[i] = temp;

    quicksort(left, i - 1, arr); //最后还要有这样的一个骚操作
    quicksort(i + 1, right, arr);

}


quicksort(0, myarr.length - 1, myarr)
console.log(myarr);
//11二叉树的遍历

/*
深度优先 中的DLR 用栈（如果右边有，入栈） （如果左边有，入栈）
广度优先 用队列（如果左边有，入队列）（如果右边有，入队列） 广度优先：
void depthFirstSearch(Tree root){
    stack(<Node *>) nodeStack;
    Node *node
    while(!nodeStack,empty())
    {
        node = nodeStack.top();
        printf(format,node->data)
        nodeStack.pop()
        if(node->rchild){
            nodeStack.push(node->rchild)
        }
        if(node->lchild){
            nodeStack.push(node->lchild)
        }
    }
}
void breadthFirstSearch(Tree root){
    
    queue<Node *> nodeQueue
    nodeQueue.push(root)
    Node * node;
    while(!nodeQueue.empty*())
    {
      node = nodeQueue.from()
      nodeQueue.pop()
      printf(format,node->data)
      if(node->lchild)
      {
          nodeQueue.push(node->lchild)
      }
      if(node->rchild)
      {
          nodeQueue.push(node->rchild)
      }
    }
}
bar obj={}...
Object.getprototypeof(obj)==obj.__proto__
*/

//12 js中的数据类型
null undefined number String object symbol

//13写一个multiply方法multiply(2,3) outputs 6

function multiply() {

    var arr = [].slice.call(arguments);
    var fn = function () {
        arr = arr.concat([].slice.call(arguments));
        return arguments.callee
    }

    fn.toString = function () {
        return arr.reduce((x, y) => x * y);
    }
    return fn
}




console.log(multiply(2, 3));

//14获取页面上被选中的checkbox

var myinputs = document.getElementsByTagName('input');
var arr = [];
for (let index = 0; index < myinputs.length; index++) {
    const element = myinputs[index];
    if (myinputs[i].checked && myinputs[i].type == 'checkbox')
        arr.push(myinputs[i]);
}
    

}

//15
flex - grow: 默认值是0; 设置1, 2...多个小内容按比例
flex - shrink: 默认值是1, 当空间不足时元素们将设置值比例缩小，设为0后则不缩小。


//16 浏览器缓存

强缓存:
Expire
cache - control

协商缓存:
Last - Modified  if-Modified - Since

Etag           if-None - Match

//17 generator

{ done:... , value:..}

function* chef() {
    yield 1
    yield 2
}

var a = chef()//这个示例中没有写传参数的，当然也可以自己写传入参数的generator

console.log(a.next());
console.log(a.next());


//18 对比两个值是否相等
因为JavaScript中的语言缺陷，所以出了一个Object.is()

+0 == -0
true
+0 ===-0
true //?
NaN ==NaN
false
Object.is(NaN,NaN)
Object.is(+0,-0)


//19递归显示目录
const fs = require('fs')
const path = require('path')

var dir = path.resolve('./')
// console.log(dir)

function traverse(dir) {

    var r1 = fs.readdirSync(dir)
    //  console.log('r1是'+r1)

    r1.forEach(function (element) {
        var r = fs.statSync(path.resolve(dir, element))

        console.log(path.resolve(dir, element));

        if (r.isDirectory()) {
            traverse(path.resolve(dir, element));
        }  

    })

}

traverse(dir);

//20
//clientHeight：表示的是可视区域的高度/宽度，不包含border和滚动条
//offsetHeight：表示可视区域的高度，包含了border和滚动条
//scrollHeight：表示了所有区域的高度，包含了因为滚动被隐藏的部分。
//clientTop：表示边框border的厚度，在未指定的情况下一般为0
//scrollTop：获取对象相对于由offsetParent属性指定的父坐标(css定位的元素或body元素)距离顶端的高度。

//21.使用setInterval和SetTimeOut有什么区别
答 因为定时器队列的机制，使用setInterval可能某些间隔会被跳过 

推荐使用:setTimeout(function(){
            //do something
            setTimeout(arguments.callee,interval) 
        },interval)

        这样做的好处是：在前一个定时器代码执行完成之前，不会向队列插入新的定时代码，确保不会有任何的缺失间隔。而且，它保证在下一次定时器代码执行之前，至少要等待指定的时间间隔。


//22.谈谈promise.resove,setTimeout,setImmediate,process.nextTick在EvenLoop队列中的执行顺序

event loop在浏览器和nodejs中是不同的，nodejs中有setImmediate和Process.nextTick,浏览器没有。
  


浏览器:

在Job queue中的队列分为两种类型：macro-task和microTask。
遇到marco-task, macrostask入macro队列,遇到micro-task microtask入micro队列
然后从macro队列中取出来一个执行，然后清空所有micro队列...如此反复..直到结束


NodeJS:
(https://www.jianshu.com/p/deedcbf68880)


NodeJS中macro-task有了更多的分类，分为timers,pending-callback,idle/prepare,poll,check,close callback

timers 对应的macro-task-queue 里面存放setTimout,setInterval的回调
pending-callback 对应的macro-task-queue 里面用于处理底层一些错误回调,一般无视
idle/prepare 一般无视
poll 对应的macro-task-queue 存放除了setImmediate,timer,close之外的所有回调
check 对应的macro-task-queue 存放setImmediate的回调
close-callback 对应的macro-task-queue 里面存放onclose事件触发的回调


执行顺序为，首先执行某个marco-task队列里的所有任务,然后执行microtask, 然后执行下一个macro-task队列里所有任务,然后执行microtask....

需要注意 Process.nextTick() 作为micro-task, 将在一个micro-task-queue里最优先执行



macro-task队列真实包含任务：

script(主程序代码),setTimeout, setInterval, setImmediate, I/O, UI rendering

micro-task队列真实包含任务：
process.nextTick, Promises, Object.observe, MutationObserver


在ES6中macro-task队列又称为ScriptJobs，而micro-task又称PromiseJobs


(1) setTimeout和promise
例3: 

setTimeout(function () {
  console.log(3);
}, 0);

Promise.resolve().then(function () {
  console.log(2);
});

console.log(1);

题目中没有指出是浏览器环境还是NodeJS环境不过结果一样 都是1 2 3


(2) process.nextTick和promise、setTimeout
例子4：
setTimeout(function(){console.log(1)},0);

new Promise(function(resolve,reject){
   console.log(2);
   resolve();
}).then(function(){console.log(3)
}).then(function(){console.log(4)});

process.nextTick(function(){console.log(5)});

console.log(6);
//输出2,6,5,3,4,1

题目中有process.nextTick 说明这是在NodeJS环境里的,

这个例子就比较复杂了，这里要注意的一点在定义promise的时候，promise构造部分是同步执行的，这样问题就迎刃而解了。

首先分析Job queue的执行顺序：

script(主程序代码)——>process.nextTick——>promise——>setTimeout

I) 主体部分： 定义promise的构造部分是同步的，
因此先输出2 ，主体部分再输出6（同步情况下，就是严格按照定义的先后顺序）

II)process.nextTick: 输出5

III）promise： 这里的promise部分，严格的说其实是promise.then部分，输出的是3,4

IV) setTimeout ： 最后输出1

综合的执行顺序就是： 2——>6——>5——>3——>4——>1


(3)更复杂的例子
setTimeout(function(){console.log(1)},0);

new Promise(function(resolve,reject){
   console.log(2);
   setTimeout(function(){resolve()},0)
}).then(function(){console.log(3)
}).then(function(){console.log(4)});

process.nextTick(function(){console.log(5)});

console.log(6);

//输出的是  2 6 5 1 3 4




//23. Async await
async function(){

}
async 表示一个异步函数 返回值是一个promise对象
await 后面可以跟任何表达式，不过更多的是放一个返回promise对象的表达式 


//24 手写一个Promise
实现一个符合Promise/A+规范的Promise
解读了Promise/A+规范之后，下面我们来看如何实现一个Promise,
首先构造一个myPromise函数，关于所有变量和函数名，应该与规范中保持相同。

1.v1.0 初始版本myPromise
function myPromise(constructor){
    let self=this;
    self.status="pending" //定义状态改变前的初始状态
    self.value=undefined;//定义状态为resolved的时候的状态
    self.reason=undefined;//定义状态为rejected的时候的状态
    function resolve(value){
        //两个==="pending"，保证了状态的改变是不可逆的
       if(self.status==="pending"){
          self.value=value;
          self.status="resolved";
       }
    }
    function reject(reason){
        //两个==="pending"，保证了状态的改变是不可逆的
       if(self.status==="pending"){
          self.reason=reason;
          self.status="rejected";
       }
    }
    //捕获构造异常
    try{
       constructor(resolve,reject);
    }catch(e){
       reject(e);
    }
}
同时，需要在myPromise的原型上定义链式调用的then方法：

myPromise.prototype.then=function(onFullfilled,onRejected){
   let self=this;
   switch(self.status){
      case "resolved":
        onFullfilled(self.value);
        break;
      case "rejected":
        onRejected(self.reason);
        break;
      default:       
   }
}
上述就是一个初始版本的myPromise，在myPromise里发生状态改变，然后在相应的then方法里面根据不同的状态可以执行不同的操作。

var p=new myPromise(function(resolve,reject){resolve(1)});
p.then(function(x){console.log(x)})
//输出1
但是这里myPromise无法处理异步的resolve.比如：

var p=new myPromise(function(resolve,reject){setTimeout(function(){resolve(1)},1000)});

p.then(function(x){console.log(x)})
//无输出
2.v2.0基于观察模式实现
为了处理异步resolve，我们修改myPromise的定义，用2个数组onFullfilledArray和onRejectedArray来保存异步的方法。在状态发生改变时，一次遍历执行数组中的方法。

function myPromise(constructor){
    let self=this;
    self.status="pending" //定义状态改变前的初始状态
    self.value=undefined;//定义状态为resolved的时候的状态
    self.reason=undefined;//定义状态为rejected的时候的状态
    self.onFullfilledArray=[];
    self.onRejectedArray=[];
    function resolve(value){
       if(self.status==="pending"){
          self.value=value;
          self.status="resolved";
          self.onFullfilledArray.forEach(function(f){
                f(self.value);
                //如果状态从pending变为resolved，
                //那么就遍历执行里面的异步方法
          });
        
       }
    }
    function reject(reason){
       if(self.status==="pending"){
          self.reason=reason;
          self.status="rejected";
          self.onRejectedArray.forEach(function(f){
              f(self.reason);
             //如果状态从pending变为rejected， 
             //那么就遍历执行里面的异步方法
          })
       }
    }
    //捕获构造异常
    try{
       constructor(resolve,reject);
    }catch(e){
       reject(e);
    }
}
对于then方法，状态为pending时，往数组里面添加方法：

myPromise.prototype.then=function(onFullfilled,onRejected){
   let self=this;
   switch(self.status){
      case "pending":
        self.onFullfilledArray.push(function(){
             onFullfilled(self.value)
        });
        self.onRejectedArray.push(function(){
             onRejected(self.reason)
        });
      case "resolved":
        onFullfilled(self.value);
        break;
      case "rejected":
        onRejected(self.reason);
        break;
      default:       
   }
}
这样，通过两个数组，在状态发生改变之后再开始执行，这样可以处理异步resolve无法调用的问题。这个版本的myPromise就能处理所有的异步，那么这样做就完整了吗？

没有，我们做Promise/A+规范的最大的特点就是链式调用，也就是说then方法返回的应该是一个promise。

3.v3.0then方法实现链式调用
要通过then方法实现链式调用，那么也就是说then方法每次调用需要返回一个promise,同时在返回promise的构造体里面，增加错误处理部分，我们来改造then方法

myPromise.prototype.then=function(onFullfilled,onRejected){
    let self=this;
    let promise2;
    switch(self.status){
      case "pending":
        promise2=new myPromise(function(resolve,reject){
             self.onFullfilledArray.push(function(){
                try{
                   let temple=onFullfilled(self.value);
                   resolve(temple)
                }catch(e){
                   reject(e) //error catch
                }
             });
             self.onRejectedArray.push(function(){
                 try{
                   let temple=onRejected(self.reason);
                   reject(temple)
                 }catch(e){
                   reject(e)// error catch
                 }
             });
        })
      case "resolved":
        promise2=new myPromise(function(resolve,reject){
            try{
              let temple=onFullfilled(self.value);
              //将上次一then里面的方法传递进下一个Promise的状态
              resolve(temple);
            }catch(e){
              reject(e);//error catch
            }
        })
        break;
      case "rejected":
        promise2=new myPromise(function(resolve,reject){
            try{
               let temple=onRejected(self.reason);
               //将then里面的方法传递到下一个Promise的状态里
               resolve(temple);   
            }catch(e){
               reject(e);
            }
        })
        break;
      default:       
   }
   return promise2;
}
这样通过then方法返回一个promise就可以实现链式的调用：

p.then(function(x){console.log(x)}).then(function(){console.log("链式调用1")}).then(function(){console.log("链式调用2")})
//输出
1
链式调用1
链式调用2
这样我们虽然实现了then函数的链式调用，但是还有一个问题，就是在Promise/A+规范中then函数里面的onFullfilled方法和onRejected方法的返回值可以是对象，函数，甚至是另一个promise。

4.v4.0 then函数中的onFullfilled和onRejected方法的返回值问题
特别的为了解决onFullfilled和onRejected方法的返回值可能是一个promise的问题。

（1）首先来看promise中对于onFullfilled函数的返回值的要求

I）如果onFullfilled函数返回的是该promise本身，那么会抛出类型错误

II）如果onFullfilled函数返回的是一个不同的promise，那么执行该promise的then函数，在then函数里将这个promise的状态转移给新的promise
III）如果返回的是一个嵌套类型的promsie，那么需要递归。

IV)如果返回的是非promsie的对象或者函数，那么会选择直接将该对象或者函数，给新的promise。

根据上述返回值的要求，我们要重新的定义resolve函数，这里Promise/A+规范里面称为：resolvePromise函数，该函数接受当前的promise、onFullfilled函数或者onRejected函数的返回值、resolve和reject作为参数。

下面我们来看resolvePromise函数的定义：

function resolvePromise(promise,x,resolve,reject){
  if(promise===x){
     throw new TypeError("type error")
  }
  let isUsed;
  if(x!==null&&(typeof x==="object"||typeof x==="function")){
      try{
        let then=x.then;
        if(typeof then==="function"){
           //是一个promise的情况
           then.call(x,function(y){
              if(isUsed)return;
              isUsed=true;
              resolvePromise(promise,y,resolve,reject);
           },function(e){
              if(isUsed)return;
              isUsed=true;
              reject(e);
           })
        }else{
           //仅仅是一个函数或者是对象
           resolve(x)
        }
      }catch(e){
         if(isUsed)return;
         isUsed=true;
         reject(e);
      }
  }else{
    //返回的基本类型，直接resolve
    resolve(x)
  }
}
改变了resolvePromise函数之后，我们在then方法里面的调用也变成了resolvePromise而不是resolve。

myPromise.prototype.then=function(onFullfilled,onRejected){
    let self=this;
    let promise2;
    switch(self.status){
      case "pending":
        promise2=new myPromise(function(resolve,reject){
             self.onFullfilledArray.push(function(){
                setTimeout(function(){
                  try{
	                   let temple=onFullfilled(self.value);
	                   resolvePromise(promise2,temple,resolve,reject)
	                }catch(e){
	                   reject(e) //error catch
	                }
                })
             });
             self.onRejectedArray.push(function(){
                setTimeout(function(){
                   try{
	                   let temple=onRejected(self.reason);
	                   resolvePromise(promise2,temple,resolve,reject)
	                 }catch(e){
	                   reject(e)// error catch
	               }
                })
             });
        })
      case "resolved":
        promise2=new myPromise(function(resolve,reject){
           setTimeout(function(){
               try{
	              let temple=onFullfilled(self.value);
	              //将上次一then里面的方法传递进下一个Promise状态
	              resolvePromise(promise2,temple,resolve,reject);
	            }catch(e){
                  reject(e);//error catch
               }
           })
        })
        break;
      case "rejected":
        promise2=new myPromise(function(resolve,reject){
           setTimeout(function(){
             try{
               let temple=onRejected(self.reason);
               //将then里面的方法传递到下一个Promise的状态里
               resolvePromise(promise2,temple,resolve,reject);   
             }catch(e){
               reject(e);
             }
           })
        })
        break;
      default:       
   }
   return promise2;
}
这样就能处理onFullfilled各种返回值的情况。

var p=new Promise(function(resolve,reject){resolve("初始化promise")})
p.then(function(){return new Promise(function(resolve,reject){resolve("then里面的promise返回值")})}).then(function(x){console.log(x)})

//输出
then里面promise的返回值
到这里可能有点乱，我们再理一理，首先返回值有两个：

then函数的返回值——>返回一个新promise，从而实现链式调用

then函数中的onFullfilled和onRejected方法——>返回基本值或者新的promise

这两者其实是有关联的，onFullfilled方法的返回值可以决定then函数的返回值。

//25 讲一下http和https
https=http+SSL
SSL加密是在传输层实现的
(1)http和https的基本概念
http: 超文本传输协议，是互联网上应用最为广泛的一种网络协议，是一个客户端和服务器端请求和应答的标准（TCP），用于从WWW服务器传输超文本到本地浏览器的传输协议，它可以使浏览器更加高效，使网络传输减少。
https: 是以安全为目标的HTTP通道，简单讲是HTTP的安全版，即HTTP下加入SSL层，HTTPS的安全基础是SSL，因此加密的详细内容就需要SSL。
https协议的主要作用是：建立一个信息安全通道，来确保数组的传输，确保网站的真实性。

(2)http和https的区别？
http传输的数据都是未加密的，也就是明文的，网景公司设置了SSL协议来对http协议传输的数据进行加密处理，简单来说https协议是由http和ssl协议构建的可进行加密传输和身份认证的网络协议，比http协议的安全性更高。
主要的区别如下：

Https协议需要ca(Certification Authority认证机构)证书，费用较高。
http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议。
使用不同的链接方式，端口也不同，一般而言，http协议的端口为80，https的端口为443
http的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。

(3)https协议的工作原理
客户端在使用HTTPS方式与Web服务器通信时有以下几个步骤，如图所示。

客户使用https url访问服务器，则要求web 服务器建立ssl链接。
web服务器接收到客户端的请求之后，会将网站的证书（证书中包含了公钥），返回或者说传输给客户端。
客户端和web服务器端开始协商SSL链接的安全等级，也就是加密等级。
客户端浏览器通过双方协商一致的安全等级，建立会话密钥，然后通过网站的公钥来加密会话密钥，并传送给网站。
web服务器通过自己的私钥解密出会话密钥。
web服务器通过会话密钥加密与客户端之间的通信。

 
4)https协议的优点

使用HTTPS协议可认证用户和服务器，确保数据发送到正确的客户机和服务器；
HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，要比http协议安全，可防止数据在传输过程中不被窃取、改变，确保数据的完整性。
HTTPS是现行架构下最安全的解决方案，虽然不是绝对安全，但它大幅增加了中间人攻击的成本。
谷歌曾在2014年8月份调整搜索引擎算法，并称“比起同等HTTP网站，采用HTTPS加密的网站在搜索结果中的排名将会更高”。

(5)https协议的缺点

https握手阶段比较费时，会使页面加载时间延长50%，增加10%~20%的耗电。
https缓存不如http高效，会增加数据开销。
SSL证书也需要钱，功能越强大的证书费用越高。
SSL证书需要绑定IP，不能再同一个ip上绑定多个域名，ipv4资源支持不了这种消耗。

//26 三次握手
2.tcp三次握手，一句话概括
客户端和服务端都需要直到各自可收发，因此需要三次握手。

简化三次握手：

syn syn+ack ack

为什么是三次 不是两次:
形象解释：
1，客户发一个暧昧的消息，给服务员
2，服务员收到，看了消息，很高兴，马上回信(此时客户还不知道服务收到)
3，客户特别高兴收到服务员关系确认的消息，(但是服务员还不知道客户收到了，如果没收到得重发，理论上来说，直到海枯石烂=-=)
4，服务员终于收到了客户关系确认的消息，悬着的心终于放下了
5，于是客户跟服务员真正建立了 一条可靠的通道，毕竟两人都知道那是行得通的。。。
所以至少得三次才能确认关系


//27
TCP和UDP的区别
（1）TCP是面向连接的，udp是无连接的即发送数据前不需要先建立链接。
（2）TCP提供可靠的服务。也就是说，通过TCP连接传送的数据，无差错，不丢失，不重复，且按序到达;UDP尽最大努力交付，即不保证可靠交付。 并且因为tcp可靠，面向连接，不会丢失数据因此适合大数据量的交换。
（3）TCP是面向字节流，UDP面向报文，并且网络出现拥塞不会使得发送速率降低（因此会出现丢包，对实时的应用比如IP电话和视频会议等）。
（4）TCP只能是1对1的，UDP支持1对1,1对多。
（5）TCP的首部较大为20字节，而UDP只有8字节。
（6）TCP是面向连接的可靠性传输，而UDP是不可靠的。


//28
4.WebSocket的实现和应用
(1)什么是WebSocket?
WebSocket是HTML5中的协议，支持持久连续，http协议不支持持久性连接。Http1.0和HTTP1.1都不支持持久性的链接，HTTP1.1中的keep-alive，将多个http请求合并为1个
(2)WebSocket是什么样的协议，具体有什么优点？

HTTP的生命周期通过Request来界定，也就是Request一个Response，那么在Http1.0协议中，这次Http请求就结束了。在Http1.1中进行了改进，是的有一个connection：Keep-alive，也就是说，在一个Http连接中，可以发送多个Request，接收多个Response。但是必须记住，在Http中一个Request只能对应有一个Response，而且这个Response是被动的，不能主动发起。
WebSocket是基于Http协议的，或者说借用了Http协议来完成一部分握手，在握手阶段与Http是相同的。我们来看一个websocket握手协议的实现，基本是2个属性，upgrade，connection。

基本请求如下：
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
Origin: http://example.com

多了下面2个属性：
Upgrade:webSocket
Connection:Upgrade
告诉服务器发送的是websocket
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13


//29
几个很实用的BOM属性对象方法?
什么是Bom? Bom是浏览器对象。有哪些常用的Bom属性呢？
window.location.href -- 返回或设置当前文档的URL 
location.search      -- 返回URL中的查询字符串部分(包括?)
location.host        -- 返回URL中的主域名部分
location.pathname    -- 返回URL的域名后的部分
location.port        -- 返回URL中的端口部分
location.protocol    -- 返回URL中的协议部分
location.assign      -- 设置当前文档的URL
location.replace     -- 设置当前文档的URL，并且在history对象的地址列表中移除这个URL
location.reload      -- 重载当前页面  

(2)history对象
history.go(num) -- 前进或后退指定的页面数
history.back() -- 后退一页 
history.forward() -- 前进一页

(3)Navigator对象
navigator.userAgent -- 返回用户代理头的字符串表示(就是包括浏览器版本信息等的字符串) 
navigator.cookieEnabled -- 返回浏览器是否支持(启用)cookie

//30
http2.0
首先补充一下，http和https的区别，相比于http,https是基于ssl加密的http协议
简要概括：http2.0是基于1999年发布的http1.0之后的首次更新。

提升访问速度（可以对于，请求资源所需时间更少，访问速度更快，相比http1.0）
允许多路复用：多路复用允许同时通过单一的HTTP/2连接发送多重请求-响应信息。改善了：在http1.1中，浏览器客户端在同一时间，针对同一域名下的请求有一定数量限制（连接数量），超过限制会被阻塞。
二进制分帧：HTTP2.0会将所有的传输信息分割为更小的信息或者帧，并对他们进行二进制编码
首部压缩
服务器端推送
 
 //31
 补充400和401、403状态码
(1)400状态码：请求无效
产生原因：

前端提交数据的字段名称和字段类型与后台的实体没有保持一致
前端提交到后台的数据应该是json字符串类型，但是前端没有将对象JSON.stringify转化成字符串。

解决方法：

对照字段的名称，保持一致性
将obj对象通过JSON.stringify实现序列化

(2)401状态码：当前请求需要用户验证
(3)403状态码：服务器已经得到请求，但是拒绝执行

//32
12.fetch发送2次请求的原因
fetch发送post请求的时候，总是发送2次，第一次状态码是204，第二次才成功？
原因很简单，因为你用fetch的post请求的时候，导致fetch 第一次发送了一个Options请求，询问服务器是否支持修改的请求头，如果服务器支持，则在第二次中发送真正的请求。
 

//33
.Cookie、sessionStorage、localStorage的区别
共同点：都是保存在浏览器端，并且是同源的


Cookie：cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递。而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下,存储的大小很小只有4K左右。 （key：可以在浏览器和服务器端来回传递，存储容量小，只有大约4K左右）


sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持，localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。（key：本身就是一个回话过程，关闭浏览器后消失，session为一个回话，当页面不同即使是同一页面打开两次，也被视为同一次回话）


localStorage：localStorage 在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的。（key：同源窗口都会共享，并且不会失效，不管窗口或者浏览器关闭与否都会始终生效）

补充说明一下cookie的作用：


保存用户登录状态。例如将用户id存储于一个cookie内，这样当用户下次访问该页面时就不需要重新登录了，现在很多论坛和社区都提供这样的功能。 cookie还可以设置过期时间，当超过时间期限后，cookie就会自动消失。因此，系统往往可以提示用户保持登录状态的时间：常见选项有一个月、三个 月、一年等。


跟踪用户行为。例如一个天气预报网站，能够根据用户选择的地区显示当地的天气情况。如果每次都需要选择所在地是烦琐的，当利用了 cookie后就会显得很人性化了，系统能够记住上一次访问的地区，当下次再打开该页面时，它就会自动显示上次用户所在地区的天气情况。因为一切都是在后 台完成，所以这样的页面就像为某个用户所定制的一样，使用起来非常方便


定制页面。如果网站提供了换肤或更换布局的功能，那么可以使用cookie来记录用户的选项，例如：背景色、分辨率等。当用户下次访问时，仍然可以保存上一次访问的界面风格。


//34
web worker
在HTML页面中，如果在执行脚本时，页面的状态是不可相应的，直到脚本执行完成后，页面才变成可相应。web worker是运行在后台的js，独立于其他脚本，不会影响页面你的性能。并且通过postMessage将结果回传到主线程。这样在进行复杂操作的时候，就不会阻塞主线程了。
如何创建web worker：

检测浏览器对于web worker的支持性
创建web worker文件（js，回传函数等）
创建web worker对象

 //35
对HTML语义化标签的理解
HTML5语义化标签是指正确的标签包含了正确的内容，结构良好，便于阅读，比如nav表示导航条，类似的还有article、header、footer等等标签。
 
//36
Doctype可声明三种DTD类型，分别表示严格版本、过渡版本以及基于框架的 HTML 文档。
当浏览器厂商开始创建与标准兼容的浏览器时，他们希望确保向后兼容性。为了实现这一点，他们创建了两种呈现模式：标准模式和混杂模式
在标准模式中，浏览器以其支持的最高标准呈现页面，；
在混杂模式中，页面以一种比较宽松的向后兼容的方式显示。混杂模式通常模拟老式浏览器的行为以防止老站点无法工作。
 
//37
Cookie如何防范XSS攻击
XSS（跨站脚本攻击）是指攻击者在返回的HTML中嵌入javascript脚本，为了减轻这些攻击，需要在HTTP头部配上，set-cookie：

httponly-这个属性可以防止XSS,它会禁止javascript脚本来访问cookie。
secure - 这个属性告诉浏览器仅在请求为https的时候发送cookie。

结果应该是这样的：Set-Cookie=.....

 //38 Cookie和 Session的区别
Cookie:是存储在客户端本地的

Session:是通过比较服务器端缓存的数据与客户端本地的cookie 是否相同
在服务器端进行相应处理
HTTP是一个无状态协议，因此Cookie可以用来存储sessionId用来唯一标识用户


//39
一句话概括RESTFUL
就是用URL定位资源，用HTTP描述操作


//40*
click在ios上有300ms延迟，原因及如何解决？
(1)粗暴型，禁用缩放
 <meta name="viewport" content="width=device-width, user-scalable=no"> 
复制代码
(2)利用FastClick，其原理是：
检测到touchend事件后，立刻出发模拟click事件，并且把浏览器300毫秒之后真正出发的事件给阻断掉

 
//41画一条0.5px的线
transform: scaleY(0.5);


//42
.visibility=hidden, opacity=0，display:none
opacity=0，该元素隐藏起来了，但不会改变页面布局，并且，如果该元素已经绑定一些事件，如click事件，那么点击该区域，也能触发点击事件的
visibility=hidden，该元素隐藏起来了，但不会改变页面布局，但是不会触发该元素已经绑定的事件
display=none，把元素隐藏起来，并且会改变页面布局，可以理解成在页面中把该元素删除掉一样。
 

//43Node 读取流
const fs = require('fs')

var rs =fs.createReadStream('./gongzuo.rar')
var ws = fs.createWriteStream('./gongzuo2.rar')

rs.pipe(ws)

ws.on('close',function(){
    console.log('复制完成了')
})




//44
 双边距重叠问题（外边距折叠）
多个相邻（兄弟或者父子关系）普通流的块元素垂直方向marigin会重叠
折叠的结果为：
两个相邻的外边距都是正数时，折叠结果是它们两者之间较大的值。
两个相邻的外边距都是负数时，折叠结果是两者绝对值的较大值。
两个外边距一正一负时，折叠结果是两者的相加的和。

//45 实现一个Nodejs中的event （发布、订阅模式）

 function Events() {

//on的作用是定义一个handle对象，对象中eventName作为属性，callback推入这个属性数组中
this.on = function (eventName, callBack) {
   
    //如果没有handles，就就新建一个handle对象
    if (!this.handles) {
        //首先定义了一个对象
        this.handles = {};
    }
    //如果handles[eventName]没东西，那么handles[eventName] 是一个空数组
    if (!this.handles[eventName]) {
        this.handles[eventName] = [];
    }
    //讲callback推入数组
    this.handles[eventName].push(callBack);
}


//emit的作用是找到hanlds对象中的handle[eventname] 然后传入参数并执行数组中所有方法
this.emit = function (eventName, obj) {
    //遍历handles对象 ，将handles[eventName]数组中的callback传入obj参数并一一执行
    if (this.handles[eventName]) {
        for (var i = 0; i < this.handles[eventName].length; i++) {
            this.handles[eventName][i](obj);
        }
    }
}

return this;

}



//设计模式
//发布-订阅模式
var event1 = new Events();
var event2 = new Events();


//handles 对象中hanlds['say']:[ function(){}...]
event1.on('say', function () {
console.log('Jony event1');
});

//handle  对象中handles['say']:{ }
event1.on('say', function () {
console.log('Jony event1+');
});

//handles 对象中handles['say']:[...]
event2.on('say', function () {
console.log('Jony event2');
})

event1.emit('say');

event2.emit('say');



Vue生命周期
1.初始化组件的事件和生命周期函数
2. beforecreated (event和lifecycle初始化好了）
3.初始化data 和methods中数据和方法
4. created （data和 methods初始化好了 一般在这里发ajax)
5. 把data上数据拿到 并且解析执行模板中的指令，当指令解析完毕就被渲染到内存中了
6.beforemounted 模板在内存中编译完成，还没有真正渲染到而面上
7.mounted 页面已经渲染好，组件进入到运行中了
8. beforeDestroy 组件即将销毁但是还么有真正开始
9.destroyed 组件已经完成了销毁

Vue组件间通信
父子间:
props

emit
this.$emit的时候会访问Vue原型上的$emit方法
读取这个vm实例中的_event属性中的事件 并执行相应事件

组件间:
使用bus(总线)来通信
event = new Vue()

在组件A中
event.$emit(...,A要传送的内容

在组件B中
event.on(...,方法[这个方法把内容传给B

讲一下this
1.this是在一个函数被调用时确定的。（注意函数这两个大字）

2.函数被调用的时候  如果函数被某一个对象所拥有， 那么this指向这个对象。

3.如果函数独立调用，this指向undefined,在非严格模式下指向window

4.当this为某个（属性:值）键值对中的值的内容时，先找那个函数，再找那个函数的对象，要是没有函数就是windo

5.箭头函数中this指向所在上下文中父级的this

6.自执行函数中this指向window
	    
关于第四点：
var obj = {  a:this };
console.log(obj.a);   <-没有函数，最后找到window

// demo
var a = 20;
var obj = {
    a: 10,
    c: this.a + 20,                  <--这里的this是window
    fn: function () {
        return this.a;               <--函数fn属于obj对象，这里的this是obj
    }
}

console.log(obj.c);     
console.log(obj.fn());

// demo2
'use strict';
var a = 20;
function foo () {
    var a = 1;
    var obj = {
        a: 10, 
        c: this.a + 20,           <--这里this，先看他在 函数 foo里面，然后foo并不属于任何对象 所以是undefined
        fn: function () {
            return this.a;
        }
    }
    return obj.c;
}
console.log(foo());    // ？
console.log(window.foo());  // ? <-- window对象中的foo

// 讲一下箭头函数
var x = 10;


function a(){

var x = 20;

return function(){
 this.x;
}
}


a();


这样return的是10。(this是在函数被调用时确定的，return的这个function不属于任何对象，所以这个function中的this是undefined，在非严格下是window)


如果是用 return ()=> this.x  this是他外面的this


原因：箭头函数中没有this，如果在箭头函数中使用this，则这个this一定是上下文中他外层的this 即爸爸function的this！！





