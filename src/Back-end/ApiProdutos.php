<?php

require_once('Conn.php');

$select = 'SELECT * FROM produto';
$result = $con->query($select);
$products = [];

while ($row = mysqli_fetch_assoc($result)) {
    $products[] = $row;
}

echo json_encode($products);
header("Access-Control-Allow-Origin:*");





