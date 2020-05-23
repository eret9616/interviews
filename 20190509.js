面试时候手机一定要静音


1.
ASCII 码:

48    '0' //注意是字符串
65    'A'
97    'a'



2.
ascii与十进制转换

'a'.charCodeAt()           // 97
String.fromCharCode(97)    // 'a'



2.js 各种进制任意转换用().toString(),第一个参数就是进制

2进制、8进制、10进制、16进制之间的相互转换
        (19).toString(16)
        (012).toString(16)
        (0x16).toString(10)
        (1111).toString(2)


转换到10进制 parseInt 第一个参数填入数字,第二参数填入这个数字的进制
//2进制到10进制；
parseInt(10, 2) //=>2
//2进制到10进制；
parseInt(100, 2) //=>4
//16进制到10进制
parseInt(12, 16) //=>18
//8进制到10进制
parseInt(12, 8); //=>10



3.二分法

function BinarySearch(arr, val) {

        let start = 0
        let end = arr.length - 1

        while (start <= end) {
                let mid = Math.floor((start + end) / 2)
                if (arr[mid] === val) {
                        return mid
                } else if (val < arr[mid]) {
                        end = mid - 1;
                } else if (val > arr[mid]) {
                        start = mid + 1;
                }
        }
        return -1
}