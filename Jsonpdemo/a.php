<?php

$data = [
    "name"=>"anonymous66",
    "age"=>"18",
    "like"=>"jianshu"
];


if ($_SERVER["REQUEST_METHOD"] == "GET") { 
    
// 接收callback函数名称
$callback = $_GET['callback'];

// 输出
echo $callback . "(" . json_encode($data) . ")";
 

}

?>