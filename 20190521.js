// 一、防抖和节流
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Document</title>
// </head>

// <body>

//     <button onclick="result2()">点我</button>

// </body>
{/* <script> */}
    function Log(x) {
        console.log(x)
    }

    // 节流
    function throttle(fn, time,...args) {
        let timer = null
        return function () {
            if (timer) return
            fn(...args)
            timer = setTimeout(() => { timer = null }, time)
        }
    }

    let result = throttle(Log, 2000,55)

    // 防抖
    function debounce(fn,time,...args) {
        let timer = null
        return function(){
            if(timer) clearTimeout(timer)
            timer = setTimeout(()=>{fn(...args)},time)
        }
    }

    let result2 = debounce(Log,2000,23)
// </script>
// </html>


// 二、
// 将两个升序的有序数组合并成一个升序的有序数组

let arr1 = [0.8,1,3,5,7]
let arr2 = [-5,0,2,5,7,10]
let result = []

let i = 0
let j = 0
let k = 0


while( i != arr1.length && j != arr2.length){
    if(arr1[i] <= arr2[j]){
        result[k] = arr1[i]
        i++
    }else{
        result[k] = arr2[j]
        j++
    }
    k++
}

if(i == arr1.length){
    for(;j!=arr2.length;j++)
    {
        result[k] = arr2[j]
        j++;k++;
    }
} 

if( j == arr2.length){
   for(;i!=arr1.length;i++)
   {
       result[k] = arr1[i]
       i++;k++;
   }
}


console.log(result)


// 三、实现instanceof
function myInstanceof(a,b)
{
    let right = b.prototype
    let left = a.__proto__

    while(true)
    {
        if(left == null) return false
        if(left == right) return true
        left = left.__proto__
    }
}


// 四、实现深拷贝
function deepCopy(obj){
    let result

    if(typeof obj == 'object')
    {
        result = obj instanceof Array? [] :{}
        for(let i in obj)
        {
            result[i] = deepCopy(obj[i])
        }
    }
    else {
        result = obj
    }

    return result
}


// 五、Array.prototype.reduce的实现原理
/**
 * 
 * 就是遍历 数组，对每个数组进行一次callback的计算,结果是acc,
 * 这个acc传入下一次计算中,最终返回的acc
 */
Array.prototype.myReduce = function (cb, initialValue) {
  const array = this
  // acc是赋的初始值或者数组第0个元素
  let acc = initialValue || array[0]
  // 初始index
  const startIndex = initialValue ? 0 : 1

  for (let i = startIndex; i < array.length; i++) {
    const cur = array[i]
    acc = cb(acc, cur, i, array)
  }
  return acc
}



// 六、为什么form表单提交没有跨域问题，但ajax提交有跨域问题？

/**
 * 
 * 因为原页面用 form 提交到另一个域名之后，原页面的脚本无法获取新页面中的内容。所以浏览器认为这是安全的。而 AJAX 是可以读取响应内容的，因此浏览器不能允许你这样做。如果你细心的话你会发现，其实请求已经发送出去了，你只是拿不到响应而已。
 * 所以浏览器同源策略的本质是，一个域名的 JS ，在未经允许的情况下，
 * 不得读取另一个域名的内容。但浏览器并不阻止你向另一个域名发送请求。
 */


// 七、求数组中最大子序列
// O(N)复杂度
function Fun(arr){

  let ThisSum=0
  let MaxSum=0

  for(let i = 0;i<arr.length;i++)
  {
    ThisSum += arr[i] // 向右累加
    if( ThisSum > MaxSum)
    {
      MaxSum = ThisSum
    }
    else if(ThisSum <0)
    {
      ThisSum = 0;
    }
    return MaxSum
  }
}
