// 节流
function throttle(fn, time, ...args) {
    let timer = null
    return function () {
        if (timer) return
        fn(...args)
        timer = setTimeout(() => { timer = null }, time)
    }
}

let result = throttle(Log, 2000, 55)

// 防抖
function debounce(fn, time, ...args) {
    let timer = null
    return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => { fn(...args) }, time)
    }
}

let result2 = debounce(Log, 2000, 23)



// 二、
// 将两个升序的有序数组合并成一个升序的有序数组

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
    for (; j != arr2.length; j++) {
        result[k] = arr2[j]
        j++; k++;
    }
}

if (j == arr2.length) {
    for (; i != arr1.length; i++) {
        result[k] = arr1[i]
        i++; k++;
    }
}


console.log(result)


// 三、实现instanceof
function myInstanceof(a, b) {
    let right = b.prototype
    let left = a.__proto__

    while (true) {
        if (left == null) return false
        if (left == right) return true
        left = left.__proto__
    }
}


// 四、实现深拷贝
function deepCopy(obj) {
    let result

    if (typeof obj == 'object') {
        result = obj instanceof Array ? [] : {}
        for (let i in obj) {
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
function Fun(arr) {

    let ThisSum = 0
    let MaxSum = 0

    for (let i = 0; i < arr.length; i++) {
        ThisSum += arr[i] // 向右累加
        if (ThisSum > MaxSum) {
            MaxSum = ThisSum
        }
        else if (ThisSum < 0) {
            ThisSum = 0;
        }
        return MaxSum
    }
}
