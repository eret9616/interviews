// 防抖
function debounce(fn, time) {
    let timer = null
    return function () {
        let context = this
        let args = arguments
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.call(context, ...args)
        }, time)
    }
}


// 节流
function throttle(fun, time) {
    let running = false
    return function () {
        let context = this
        let args = arguments
        if (running) return
        running = true
        setTimeout(() => {
            running = false
        }, time)
        fun.call(context, ...args)
    }
}


// 二、
// 将两个升序的有序数组合并成一个升序的有序数组
// 思路：设置三个指针，值都为0，一个指向arr1的第0个元素，一个指向arr2的第0个元素，一个指向result的第0个元素
//      当i不等于arr1的长度并且j不等于arr2的长度的时候，result[k]元素值是arr1[i]和arr2[j]中较小的，i++，k++，或者j++，k++
//      当这个这个循环结束后，说明有一个数组已经全部循环完毕了，之后将另一个数组中的值推入到数组中
let arr1 = [0.8, 1, 3, 5, 7]
let arr2 = [-5, 0, 2, 5, 7, 10]
let result = []

let i = 0
let j = 0
let k = 0


while (i != arr1.length && j != arr2.length) {
    if (arr1[i] <= arr2[j]) {
        result[k] = arr1[i]
        i++
    } else {
        result[k] = arr2[j]
        j++
    }
    k++
}

if (i == arr1.length) {
    // 说明arr1数组中的数已经全部取完了
    for (; j != arr2.length; j++) {
        result[k] = arr2[j]
        j++; k++;
    }
}

if (j == arr2.length) {
    // 说明arr2数组中的数已经全部取完了
    for (; i != arr1.length; i++) {
        result[k] = arr1[i]
        i++; k++;
    }
}


console.log(result)


// 三、实现instanceof
Object.prototype.instanceof$$ = function (left, right) {
    let leftProto = left.__proto__
    while (leftProto !== null) {
        if (left.__proto__.constructor === right) {
            return true
        }
        leftProto = leftProto.__proto__
    }
    return false
}



// 四、实现深拷贝
function deepClone(target) {
    let obj
    if (Object.prototype.toString.call(target) === '[object Array]') {
        obj = []
        target.forEach((r, i) => {
            obj[i] = deepClone(r)
        })
    } else if (Object.prototype.toString.call(target) === '[object Object]') {
        obj = {}
        for (let i in target) {
            obj[i] = deepClone(target[i])
        }
    } else {
        obj = target
    }
    return obj
}


// 五、Array.prototype.reduce的实现原理
/**
 * 分析：数组的reduce方法接收两个参数，第一个参数是cb函数，cb函数参数是(acc,curVal,index,arr)
 *                                第二个参数是initialValue，作为初始值
 * 
 * reduce方法内部原理：
 * 就是遍历数组中每个元素，对元素调用cb方法计算得到当前值，然后累计加到acc上，最后返回acc
 * 如果有initialValue，那么acc就是initialValue，index是从1开始的
 */
Array.prototype.__reduce = function (cb, initialValue) {

    let arr = this

    let accumulator = initialValue ? initialValue : arr[0]
    let startIndex = initialValue ? 0 : 1

    for (let i = startIndex; i < arr.length; i++) {
        let currentValue = arr[i]
        acc = cb(accumulator, currentValue, i, arr)
    }

    return accumulator
}


// 六、为什么form表单提交没有跨域问题，但ajax提交有跨域问题？

/* 
    跨域问题是指为了安全，浏览器不允许与当前协议域名端口不同的请求发出ajax请求
    xhr请求最早一般用来获取数据然后填充到innerHTML中，
    如果有script是可以运行的，进而可能会引发安全问题

    form表单的提交post，并不是xhr请求，根本就不是ajax请求，
    form表单提交后页面会跳转，指向获取到的的新的数据，
    不存在操纵跳转前页面数据的问题，所以没有跨域问题限制
 */



// 七、求数组中最大子序列
// O(N)复杂度
// 有一整型数组，其中元素可正、可负、也可为零。
// 要求在该数组中找到一个子序列，其和在所有子序列中最大
// 思路：使用动态规划，创建数组dp，dp[0]的值为arr[0],max值为arr[0],从1开始遍历arr，dp中当前元素是 当前数组元素+上一个dp元素 和 当前数组元素 对比的较大值
function maxSubArray(arr) {

    let dp = []
    dp[0] = arr[0]
    let max = arr[0]

    for (let i = 1; i < arr.length; i++) {
        dp[i] = Math.max(dp[i - 1] + arr[i], arr[i])
        if (dp[i] > max){
            max = dp[i]
        }
    }
    return max
}

let arr = [1, 2, 3, -5, 12, 2, -32, 2, 4, 8, 5, -12, 2]

const r =maxSubArray(arr)
