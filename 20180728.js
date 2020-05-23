
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

a.open('GET', url, false) //false为异步

//2.数组去重

var a = [1, 2, 3]
var s = new Set(a)
var a = Array.from(s)

//3.http状态码

304 自从上次请求后，请求的网页未修改过。(缓存)
415 不支持的媒体类型
500 服务器内部错误

//4.函数柯里化
/*
实现
 add(1)(2)(2,3)  
 add(1,2,34)
 add(1)(2,3,4)
 */

function currying() {

  var arr = [...arguments]

  var fn = function () {
    arr = [...arr, ...arguments]
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



//7.判断是否是数字
isNaN('23'); false //这里是个坑，即时是字符串也被转成了数字来判断

new RegExp(/\d+/g).test('s2d') //true

//8.生成[a,b)间的随机数
function generate(a, b) {

  return Math.floor(Math.random() * (b - a) + a)

}

//9.选择器
div[class*= test]

会命中class中带test的div



//10快速排序
var myarr = [2, 4, 5, 1, 6];

/*
  1.快速排序的原理
  2.为什么快速排序快？（时间复杂度是多少？）
*/
function quicksort(left, right, arr) {

  var i, j, t, temp; //声明7个变量..


  if (left > right) {
    return;
  }               //如果排完了，就不排了



  i = left;
  j = right;
  temp = arr[left];  //左边是i 右边是j 最左边的设为temp

  while (i < j)       //当i不为j的时候，j从右往左找到小于temp的停下
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
    nodeStack.push(root)
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
null undefined number string boolean symbol

//13写一个multiply方法multiply(2,3) outputs 6
function multiply() {
  var arr = [...arguments]
  var fn = function () {
    arr = [...arr, ...arguments]
    return fn
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
expire
cache - control中的max - age(这是一个相对时间，优先级比expires高)

协商缓存:
if-modified - since（请求） last - modified（响应) （精确到秒）

if-none - match（请求）  etag（响应） （优先级比if - modified - since last - modified高）




//17 generator (generator function)
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

  + 0 == -0
true
  + 0 === -0
true //?
NaN == NaN
false
Object.is(NaN, NaN) // falsle
Object.is(+0, -0)   // false


//19递归显示目录
const fs = require('fs')
const path = require('path')

const dir = path.resolve('./')

function traverse(dir) {
  var f1 = fs.readdirsync(dir)
  r1.forEach((file) => {
    const fileState = fs.stateSync(path.resolve(dir, element))

    console.log(path.resolve(dir, file))

    if (fileState.isDirectory()) {
      traverse(path.resolve(dir, file))
    }
  })
}

traverse(dir)

//20
//clientHeight：表示的是可视区域的高度/宽度，不包含border和滚动条
//offsetHeight：表示可视区域的高度，包含了border和滚动条
//scrollHeight：表示了所有区域的高度，包含了因为滚动被隐藏的部分。
//clientTop：表示上边框border的厚度，在未指定的情况下一般为0
//scrollTop：获取对象相对于由offsetParent属性指定的父坐标(css定位的元素或body元素)距离顶端的高度。

//21.使用setInterval的问题
答：因为javascript定时器的机制，使用setInterval可能某些代码会被跳过，不执行

假设 setInterval(fn, 200)
如果fn的执行时间需要600ms那么在第二个时间点400ms时会跳过不执行fn，最终导致执行不连续，
为了解决这个问题，使执行连续起来，

推荐使用: setTimeout(function () {
  //do something
  setTimeout(arguments.callee, interval)
}, interval)


//22.谈谈promise.resove,setTimeout,setImmediate,process.nextTick在EvenLoop队列中的执行顺序

浏览器:

在Job queue中的队列分为两种类型：macro - task和microTask。
遇到marco - task, macrostask入macro队列, 遇到micro - task microtask入micro队列
一个macrotask 一堆microtask 这样反复执行下去


NodeJS中:
macro - task有了更多的分类，分为timers, pending - callback, idle / prepare, poll, check, close callback
timers 对应的macro - task - queue 里面存放setTimout, setInterval的回调
pending - callback 对应的macro - task - queue 里面用于处理底层一些错误回调, 一般无视
idle / prepare 一般无视
poll 对应的macro - task - queue 存放除了setImmediate, timer, close之外的所有回调
check 对应的macro - task - queue 存放setImmediate的回调
close - callback 对应的macro - task - queue 里面存放onclose事件触发的回调
https://www.jianshu.com/p/deedcbf68880
结论：
先执行macrotask，然后执行microtask ，process.nextTick优先于其他的先执行，


macro - task队列任务：
script(主程序代码), setTimeout, setInterval, setImmediate, I / O, UI rendering

micro - task队列任务：
process.nextTick, Promises.then, MutationObserver

macro - task队列又称为ScriptJobs，而micro - task又称PromiseJobs


  (1) setTimeout和promise
例3:

setTimeout(function () {
  console.log(3);
}, 0);

Promise.resolve().then(function () {
  console.log(2);
});

console.log(1);

// 1 2 3


(2) process.nextTick和promise、setTimeout

例子4：

setTimeout(function () { console.log(1) }, 0);

new Promise(function (resolve, reject) {
  console.log(2);
  resolve();
}).then(function () {
  console.log(3)
}).then(function () { console.log(4) });

process.nextTick(function () { console.log(5) });

console.log(6);
//输出2,6,5,3,4,1


题目中有process.nextTick 说明在NodeJS环境里的,

  注意： process.nextTick会在一个microtask中最先执行

I) 主体部分： 定义promise的构造部分是同步的，
因此先输出2 ，主体部分再输出6（同步情况下，就是严格按照定义的先后顺序）

II) process.nextTick: 输出5

III）promise： 这里的promise部分，严格的说其实是promise.then部分，输出的是3, 4

IV) setTimeout ： 最后输出1

综合的执行顺序就是： 2——> 6——> 5——> 3——> 4——> 1


  (3)更复杂的例子
setTimeout(function () { console.log(1) }, 0);

new Promise(function (resolve, reject) {
  console.log(2);
  setTimeout(function () { resolve() }, 0)
}).then(function () {
  console.log(3)
}).then(function () { console.log(4) });

process.nextTick(function () { console.log(5) });

console.log(6);
//输出的是  2 6 5 1 3 4




//23. Async await
async function() {

}
async 表示一个异步函数 返回值是一个promise对象
await 后面放一个返回promise对象的表达式


//24 手写一个Promise // 这个可以看我自己的github https://github.com/eret9616/promise
实现一个符合Promise / A + 规范的Promise
解读了Promise / A + 规范之后，下面我们来看如何实现一个Promise,
  首先构造一个myPromise函数，关于所有变量和函数名，应该与规范中保持相同。

1.v1.0 初始版本myPromise
function myPromise(constructor) {
  let self = this;
  self.status = "pending" //定义状态改变前的初始状态
  self.value = undefined;//定义状态为resolved的时候的状态
  self.reason = undefined;//定义状态为rejected的时候的状态
  function resolve(value) {
    //两个==="pending"，保证了状态的改变是不可逆的
    if (self.status === "pending") {
      self.value = value;
      self.status = "resolved";
    }
  }
  function reject(reason) {
    //两个==="pending"，保证了状态的改变是不可逆的
    if (self.status === "pending") {
      self.reason = reason;
      self.status = "rejected";
    }
  }
  //捕获构造异常
  try {
    constructor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}
同时，需要在myPromise的原型上定义链式调用的then方法：

myPromise.prototype.then = function (onFullfilled, onRejected) {
  let self = this;
  switch (self.status) {
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

var p = new myPromise(function (resolve, reject) { resolve(1) });
p.then(function (x) { console.log(x) })
//输出1
但是这里myPromise无法处理异步的resolve.比如：

var p = new myPromise(function (resolve, reject) { setTimeout(function () { resolve(1) }, 1000) });

p.then(function (x) { console.log(x) })
//无输出
2.v2.0基于观察模式实现
为了处理异步resolve，我们修改myPromise的定义，用2个数组onFullfilledArray和onRejectedArray来保存异步的方法。在状态发生改变时，一次遍历执行数组中的方法。

function myPromise(constructor) {
  let self = this;
  self.status = "pending" //定义状态改变前的初始状态
  self.value = undefined;//定义状态为resolved的时候的状态
  self.reason = undefined;//定义状态为rejected的时候的状态
  self.onFullfilledArray = [];
  self.onRejectedArray = [];
  function resolve(value) {
    if (self.status === "pending") {
      self.value = value;
      self.status = "resolved";
      self.onFullfilledArray.forEach(function (f) {
        f(self.value);
        //如果状态从pending变为resolved，
        //那么就遍历执行里面的异步方法
      });

    }
  }
  function reject(reason) {
    if (self.status === "pending") {
      self.reason = reason;
      self.status = "rejected";
      self.onRejectedArray.forEach(function (f) {
        f(self.reason);
        //如果状态从pending变为rejected， 
        //那么就遍历执行里面的异步方法
      })
    }
  }
  //捕获构造异常
  try {
    constructor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}
对于then方法，状态为pending时，往数组里面添加方法：

myPromise.prototype.then = function (onFullfilled, onRejected) {
  let self = this;
  switch (self.status) {
    case "pending":
      self.onFullfilledArray.push(function () {
        onFullfilled(self.value)
      });
      self.onRejectedArray.push(function () {
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

没有，我们做Promise / A + 规范的最大的特点就是链式调用，也就是说then方法返回的应该是一个promise。

3.v3.0then方法实现链式调用
要通过then方法实现链式调用，那么也就是说then方法每次调用需要返回一个promise, 同时在返回promise的构造体里面，增加错误处理部分，我们来改造then方法

myPromise.prototype.then = function (onFullfilled, onRejected) {
  let self = this;
  let promise2;
  switch (self.status) {
    case "pending":
      promise2 = new myPromise(function (resolve, reject) {
        self.onFullfilledArray.push(function () {
          try {
            let temple = onFullfilled(self.value);
            resolve(temple)
          } catch (e) {
            reject(e) //error catch
          }
        });
        self.onRejectedArray.push(function () {
          try {
            let temple = onRejected(self.reason);
            reject(temple)
          } catch (e) {
            reject(e)// error catch
          }
        });
      })
    case "resolved":
      promise2 = new myPromise(function (resolve, reject) {
        try {
          let temple = onFullfilled(self.value);
          //将上次一then里面的方法传递进下一个Promise的状态
          resolve(temple);
        } catch (e) {
          reject(e);//error catch
        }
      })
      break;
    case "rejected":
      promise2 = new myPromise(function (resolve, reject) {
        try {
          let temple = onRejected(self.reason);
          //将then里面的方法传递到下一个Promise的状态里
          resolve(temple);
        } catch (e) {
          reject(e);
        }
      })
      break;
    default:
  }
  return promise2;
}
这样通过then方法返回一个promise就可以实现链式的调用：

p.then(function (x) { console.log(x) }).then(function () { console.log("链式调用1") }).then(function () { console.log("链式调用2") })
//输出
1
链式调用1
链式调用2
这样我们虽然实现了then函数的链式调用，但是还有一个问题，就是在Promise / A + 规范中then函数里面的onFullfilled方法和onRejected方法的返回值可以是对象，函数，甚至是另一个promise。

4.v4.0 then函数中的onFullfilled和onRejected方法的返回值问题
特别的为了解决onFullfilled和onRejected方法的返回值可能是一个promise的问题。

（1）首先来看promise中对于onFullfilled函数的返回值的要求

I）如果onFullfilled函数返回的是该promise本身，那么会抛出类型错误

II）如果onFullfilled函数返回的是一个不同的promise，那么执行该promise的then函数，在then函数里将这个promise的状态转移给新的promise
III）如果返回的是一个嵌套类型的promsie，那么需要递归。

IV) 如果返回的是非promsie的对象或者函数，那么会选择直接将该对象或者函数，给新的promise。

根据上述返回值的要求，我们要重新的定义resolve函数，这里Promise / A + 规范里面称为：resolvePromise函数，该函数接受当前的promise、onFullfilled函数或者onRejected函数的返回值、resolve和reject作为参数。

下面我们来看resolvePromise函数的定义：

function resolvePromise(promise, x, resolve, reject) {
  if (promise === x) {
    throw new TypeError("type error")
  }
  let isUsed;
  if (x !== null && (typeof x === "object" || typeof x === "function")) {
    try {
      let then = x.then;
      if (typeof then === "function") {
        //是一个promise的情况
        then.call(x, function (y) {
          if (isUsed) return;
          isUsed = true;
          resolvePromise(promise, y, resolve, reject);
        }, function (e) {
          if (isUsed) return;
          isUsed = true;
          reject(e);
        })
      } else {
        //仅仅是一个函数或者是对象
        resolve(x)
      }
    } catch (e) {
      if (isUsed) return;
      isUsed = true;
      reject(e);
    }
  } else {
    //返回的基本类型，直接resolve
    resolve(x)
  }
}
改变了resolvePromise函数之后，我们在then方法里面的调用也变成了resolvePromise而不是resolve。

myPromise.prototype.then = function (onFullfilled, onRejected) {
  let self = this;
  let promise2;
  switch (self.status) {
    case "pending":
      promise2 = new myPromise(function (resolve, reject) {
        self.onFullfilledArray.push(function () {
          setTimeout(function () {
            try {
              let temple = onFullfilled(self.value);
              resolvePromise(promise2, temple, resolve, reject)
            } catch (e) {
              reject(e) //error catch
            }
          })
        });
        self.onRejectedArray.push(function () {
          setTimeout(function () {
            try {
              let temple = onRejected(self.reason);
              resolvePromise(promise2, temple, resolve, reject)
            } catch (e) {
              reject(e)// error catch
            }
          })
        });
      })
    case "resolved":
      promise2 = new myPromise(function (resolve, reject) {
        setTimeout(function () {
          try {
            let temple = onFullfilled(self.value);
            //将上次一then里面的方法传递进下一个Promise状态
            resolvePromise(promise2, temple, resolve, reject);
          } catch (e) {
            reject(e);//error catch
          }
        })
      })
      break;
    case "rejected":
      promise2 = new myPromise(function (resolve, reject) {
        setTimeout(function () {
          try {
            let temple = onRejected(self.reason);
            //将then里面的方法传递到下一个Promise的状态里
            resolvePromise(promise2, temple, resolve, reject);
          } catch (e) {
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

var p = new Promise(function (resolve, reject) { resolve("初始化promise") })
p.then(function () { return new Promise(function (resolve, reject) { resolve("then里面的promise返回值") }) }).then(function (x) { console.log(x) })

//输出
then里面promise的返回值
到这里可能有点乱，我们再理一理，首先返回值有两个：

then函数的返回值——> 返回一个新promise，从而实现链式调用

then函数中的onFullfilled和onRejected方法——> 返回基本值或者新的promise

这两者其实是有关联的，onFullfilled方法的返回值可以决定then函数的返回值。

//25 讲一下http和https
https = http + SSL
SSL加密是在传输层实现的
  (1)http和https的基本概念
http: http是指超文本传输协议，是明文传输的协议
https: http + SSL

  (2)http和https的区别？
1.http是明文传输的，在80端口，https在443端口 （默认）
2.https的信息传输是经过加密的，更加安全
3.Https协议需要ca(Certification Authority认证机构)证书，费用较高。

(3)https协议的工作原理
1.浏览器请求服务器
2.服务器把证书发给浏览器，浏览器对比查询内置证书查看对应的网址和域名是否正确，如果正确，使用这个证书配套的公钥
3.浏览器产生一种对称加密算法，然后使用公钥加密，并传输给服务器
4.服务器收到后使用私钥进行解密得到加密算法
5.服务器与浏览器间开始使用对称加密算法进行通信


  (5)https协议的缺点
https握手阶段比较费时，会使页面加载时间延长
SSL证书需要钱，功能越强大的证书费用越高
SSL证书需要绑定IP，不能再同一个ip上绑定多个域名，ipv4支持不了这种消耗


//26 三次握手
2.tcp三次握手，一句话概括
客户端和服务端都需要直到各自可收发，因此需要三次握手。

简化三次握手：

syn syn + ack ack

为什么是三次 不是两次:
形象解释：
1，客户发一个暧昧的消息，给服务员  SYN
2，服务员收到，看了消息，很高兴，马上回信(此时客户还不知道服务收到)  SYN
3，客户特别高兴收到服务员关系确认的消息，(但是服务员还不知道客户收到了，如果没收到得重发，理论上来说，直到海枯石烂 =-=) SYN + ACK
4，服务员终于收到了客户关系确认的消息，悬着的心终于放下了 ACK
5，于是客户跟服务员真正建立了 一条可靠的通道，毕竟两人都知道那是行得通的。。。
所以至少得三次才能确认关系


//27
TCP和UDP的区别
（1）TCP是面向连接的，udp是无连接的，发送数据前不需要先建立链接。
（2）TCP提供可靠的服务。也就是说，通过TCP连接传送的数据，无差错，不丢失，不重复，且按序到达; UDP尽最大努力交付，即不保证可靠交付。 并且因为tcp可靠，面向连接，不会丢失数据因此适合大数据量的交换。
（3）TCP是面向字节流，UDP面向报文，并且网络出现拥塞不会使得发送速率降低（因此会出现丢包，对实时的应用比如IP电话和视频会议等）。
（4）TCP只能是1对1的，UDP支持1对1, 1对多。
（5）TCP的首部较大为20字节，而UDP只有8字节。
（6）TCP是面向连接的可靠性传输，而UDP是不可靠的。


//28
4.WebSocket的实现和应用
  (1)什么是WebSocket ?
    WebSocket是HTML5中的协议，支持长链接，让浏览器与服务器可以双向通信。
(2)WebSocket是什么样的协议，具体有什么优点？
HTTP的生命周期通过Request来界定，也就是Request一个Response，那么在Http1.0协议中，这次Http请求就结束了。
在Http1.1中进行了改进，是的有一个connection：Keep - alive，也就是说，在一个Http连接中，可以发送多个Request，接收多个Response。
但是必须记住，在Http中一个Request只能对应有一个Response，而且这个Response是被动的，不能主动发起。
WebSocket是基于Http协议的，
借用了Http协议来完成一部分握手，在握手阶段与Http是相同的。
我们来看一个websocket握手协议的实现，基本是2个属性，upgrade，connection。

基本请求如下：
一、客户端： 申请协议升级
GET / chat HTTP / 1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec - WebSocket - Key: x3JJHMbDL1EzLkh9GBhXDw ==
  Sec - WebSocket - Protocol: chat, superchat
Sec - WebSocket - Version: 13
Origin: http://example.com

多了下面2个属性：
Upgrade: webSocket
Connection: Upgrade
告诉服务器发送的是websocket
Sec - WebSocket - Key: x3JJHMbDL1EzLkh9GBhXDw ==
  Sec - WebSocket - Protocol: chat, superchat
Sec - WebSocket - Version: 13

二、服务端：响应协议升级

HTTP / 1.1 101 Switching Protocols
Connection: Upgrade
Upgrade: websocket
Sec - WebSocket - Accept: Oy4NRAQ13jhfONC7bP8dTKb4PTU =

  状态代码101表示协议切换。


http的keep - alive和websocket长链接有什么不同？
http只能是客户端请求，服务端响应，而且header的开销很大，websocket是可以双向通信的，效率也更高。



//29
几个很实用的BOM属性对象方法 ?
  什么是Bom ? Bom是浏览器对象。有哪些常用的Bom属性呢？
window.location.href-- 返回或设置当前文档的URL
location.search-- 返回URL中的查询字符串部分(包括 ?)
location.host-- 返回URL中的主域名部分
location.pathname-- 返回URL的域名后的部分
location.port-- 返回URL中的端口部分
location.protocol-- 返回URL中的协议部分
location.assign-- 设置当前文档的URL
location.replace-- 设置当前文档的URL，并且在history对象的地址列表中移除这个URL
location.reload-- 重载当前页面

  (2)history对象
history.go(num)-- 前进或后退指定的页面数
history.back()-- 后退一页
history.forward()-- 前进一页

  (3)Navigator对象
navigator.userAgent-- 返回用户代理头的字符串表示(就是包括浏览器版本信息等的字符串)
navigator.cookieEnabled-- 返回浏览器是否支持(启用)cookie


//30
http2.0
首先补充一下，http和https的区别，相比于http, https是基于ssl加密的http协议
简要概括：http2.0是基于1999年发布的http1.0之后的首次更新。

http2的优点
· Enables Multiplexing
· Compress HTTP Headers
· Allows Server Push

1.多路复用
http1的服务器处理是一个请求一个响应，http2是并行处理的
假设客户端要发送helloworld，只能是先发送hello在发送world
没办法同时发送这两个单词。不然服务器可能收到HWeolrllod

为了解决这个问题，可以将数据拆成包，给每个包打上标签
①H ②W ①e ②o ①l ②r ①l ②l ①o ②d
这样服务器就可以根据标签把两个单词分开来。
实现上面效果的技术叫做：二进制分帧。

http2将所有传输信息分割为frame。首部放在headerframe里，数据放在dataframe里。

2.首部压缩
在http1中消息主体都会经过gzip压缩，但状态行和头部却没有经过任何压缩，直接以纯文本传输
http2原理是在服务器和浏览器间维护字典，于是便可以通过数字直接拿到请求头的名称。

3.服务端推送
在html1.1中需要 请求html然后返回html 请求css，再返回css
在html2中 请求html 就可以返回html，返回css



//31
补充400和401、403状态码
  (1)400状态码：请求无效 可能是网络设置问题或浏览器有问题了
    (2)401状态码：请求需要用户验证、未授权、Unauthorized(web服务器可以自定义这个错误码的，401的语义是未授权)
      (3)403状态码：请求拒绝执行、禁止 Forbidden（403语义是禁止）

//32
12. 说一下跨域
协议、域名、端口如果有一个不同发送xhr的时候会跨域
请求头中会带上origin
如果是非简单请求，还会带上：
Access - Control - Allow - Headers
Access - Control - Allow - Methods
简单请求，非简单请求的区别：
如果请求方法为：
(1)HEAD(2)GET(3)POST
请求头不超过
Accept
Content - Language
Content - Type只限于form / x - www - urlenconded、multipart / form - data、text / plain
是简单请求，其他是非简单请求。



//33
.Cookie、sessionStorage、localStorage的区别
共同点：都是保存在浏览器端，并且是同源的


Cookie：cookie数据始终在同源的http请求中携带（即使不需要），
即cookie在浏览器和服务器间来回传递。
而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。
cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下, 存储的大小很小只有4K左右。
（key：可以在浏览器和服务器端来回传递，存储容量小，只有大约4K左右）


sessionStorage：
仅在当前浏览器tab关闭前有效，并且得是同源，在当前tab中，即使刷新页面或者切到别的页面再切回来，依然存在。

localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；

cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。


补充说明一下cookie的作用：

(1)保存用户登录状态。例如将用户id存储于一个cookie内，这样当用户下次访问该页面时就不需要重新登录了。
cookie可以设置过期时间，当超过时间期限后，cookie会自动消失，因此，系统可以提示用户保持登录状态的时间选项：一个月、三个月、一年等。
(2)跟踪用户行为。例如一个天气预报网站，能够根据用户选择的地区显示当地的天气情况，系统能够记住上一次访问的地区。
(3)定制页面。网站提供了换肤或更换布局的功能，可以使用cookie来记录用户的选项，例如：背景色、分辨率。


//34
web worker
在HTML页面中，执行脚本时，页面的状态是不可响应的，直到脚本执行完成后，页面才可响应。
web worker是运行在后台的js，独立于其他脚本，不会影响页面你的性能。
并且通过postMessage将结果回传到主线程。这样在进行复杂操作的时候，就不会阻塞主线程了。
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


//38 Cookie和 Session的区别
Cookie: 是存储在客户端本地的

Session: 是通过比较服务器端缓存的数据与客户端本地的cookie 是否相同
在服务器端进行相应处理
HTTP是一个无状态协议，因此Cookie可以用来存储sessionId用来唯一标识用户


//37
说一下XSS(cross site scripting)
XSS（跨站脚本攻击）是指攻击者在返回的HTML中嵌入javascript脚本，
比如在评论中插入一段标签，如果模板引擎没有做转移处理，那么会生成script

前端为了减轻这些攻击，可以阻止js读取cookie，
在HTTP头部配上，set - cookie：
httponly - 这个属性可以防止XSS, 它会禁止javascript脚本来访问cookie。
secure - 这个属性告诉浏览器仅在请求为https的时候发送cookie。
Set - Cookie: <cookie-name>=<cookie-value>; Secure    使用https的时候才能发送cookie
Set-Cookie: <cookie-name>=<cookie-value>; HttpOnly  禁止JavaScript访问cookie

{/* https://juejin.im/post/5bc009996fb9a05d0a055192#heading-20 */}
说一下CSRF （cross site request forgery 跨站请求伪造
受害者登录网站a，保留了登录凭证(cookie)
受害者访问了网站b，b网站向a网站发送了一个请求，浏览器默认会携带a网站的cookie（Form表单发post没有跨域问题，因为他虽然是XHR，但不是通过script创建，而且拿不到响应）
在a网站中受害者执行了被操纵的act=xxx

伪造http请求特点：

B网站向A网站请求
带A网站Cookies，但是B拿不到cookie，也看不到cookie内容
不访问A网站前端
referer为B网站

措施：
1.服务端检查HTTP请求头中的refer，禁止第三方网站的请求
2.samesite属性,strict完全禁止第三方Cookie,跨站点时任何情况都不会发送cookie,Lax:允许第三方的get(Set-Cookie: CookieName=CookieValue; SameSite=Strict;)
3.强制验证码,于是b网站无法伪造一个完整的请求


//39
一句话概括RESTFUL
就是用URL定位资源，用HTTP描述操作


//40*
移动端浏览器的300ms延迟问题是什么？
假设有一个链接,用户点了一次之后并不一定是要打开的,也可能是想双击放大,所以有个300ms的延迟,判定你是否是想打开还是想素昂及方法
解决方法
(1)粗暴型，禁用缩放,在浏览器meta标签中将user-scalable设置成no
 {/* <meta name="viewport" content="width=device-width, user-scalable=no">  */}
(2)使用FastClick.js，其原理是：
检测到touchend事件后，立刻出发模拟click事件，并把浏览器300毫秒之后真正出发的事件给阻断掉


//41 画一条0.5px的线
transform: scaleY(0.5);


//42 visibility:hidden opacity:0 display:none的区别
opacity=0，元素隐藏起来了，但不会改变页面布局，可以触发点击事件!
visibility=hidden，元素隐藏起来了，但不会改变页面布局，不会触发点击事件事件!
display=none，元素隐藏起来，并且会改变页面布局，可以理解成在页面中把该元素删除掉一样。


//43 Node 读取流
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
        for (var i = 0; i < this.handles[{
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

//handle  对象中handles['say']:{}
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
1. 初始化组件的事件(initEvent)和生命周期(initLifeCycle)函数
2. beforecreated (event和lifecycle初始化好了）
3. 初始化data和methods中数据和方法
4. created （data和 methods初始化好了 一般在这里发ajax)
5. 把data上数据拿到 并且解析执行模板中的指令，指令解析完毕
6. beforemounted 模板在内存中编译完成，还没有真正渲染到而面上
7. mounted 页面已经渲染好，组件进入到运行中了
8. beforeDestroy 组件即将销毁但是还么有真正开始
9. destroyed 组件已经完成了销毁

Vue组件间通信
父子间:
props

emit
this.$emit的时候会访问Vue原型上的$emit方法
读取这个vm实例中的_event属性中的事件 并执行相应事件

组件间:
使用事件调度器(一个event emitter实例,一个vue实例)来通信
event = new Vue()

在组件A的change事件中,调用event的emit
event.$emit(...,A要传送的内容

在组件B的mounted钩子中
event.on(...,方法[这个方法把内容传给B的data中某个属性


讲一下this
1.this是在一个函数被调用时确定的。（注意函数这两个大字）

2.函数被调用的时候  如果函数被某一个对象所拥有， 那么this指向这个对象。

3.如果函数独立调用，this指向undefined,在非严格模式下指向window

4.当this为某个（属性:值）键值对中的值的内容时，先找那个函数，再找那个函数的对象，要是没有函数就是window

5.箭头函数中this指向所在上下文中父级的this

6.自执行函数中this指向window

关于第四点：
var obj = {a:this };
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

console.log(obj.c);      //40
console.log(obj.fn());   // 10

// demo2
'use strict';
var a = 20;
function foo () {
    var a = 1;
    var obj = {
      a: 10,
        c: this.a + 20,           <--这里this，先看他在 函数 foo里面，然后foo并不属于任何对象 又有'use strict' 所以是undefined
        fn: function () {
            return this.a;
        }
    }
    return obj.c;
}
console.log(foo());    // ？ Cannot read property 'a' of undefined
console.log(window.foo());  // ? <-- window对象中的foo 40