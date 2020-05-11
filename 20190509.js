面试时候手机一定要静音


1.
ASCII 码:

0 是 48，                          9 是 57

'A'是 65 (65-90 A-Z)              'a'是 97 (97-122 a-z)

'A'与'a'间差32  



2. 
ascii与十进制转换

'a'.charCodeAt()                  // 97

String.fromCharCode(97)    // 'a'



2.js 各种进制任意转换用().toString()


2进制、8进制、10进制、16进制之间的相互转换
(19).toString(16)
(012).toString(16)
(0x16).toString(10)
(1111).toString(2)


其他进制转换到10进制 parseInt
//2进制到10进制；
parseInt(10,2) //=>2
//2进制到10进制；
parseInt(100,2) //=>4
//16进制到10进制
parseInt(12, 16) //=>18
//8进制到10进制
parseInt(12,8); //=>10



3.二分法

function BinarySearch(arr,val) {

      let start = 0
      let end = arr.length-1
      let mid = Math.floor((start+end)/2)

      while(arr[mid] != val && start < end) {
	
         // 调整查找范围
          if(val < arr[mid]){
                   end = mid -1;
           } else if (val > arr[mid]) {
                   start = mid +1;
           }

         // 重新计算中项
          mid = Math.floor((start+end)/2)
      }

      return (arr[mid] != val) ? -1 : mid
}