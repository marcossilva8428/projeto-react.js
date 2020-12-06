<?php
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "fseletro";

$con = mysqli_connect($host, $user, $pass, $dbname);

if ($con) {
        
    return true;

} else {

    die ("falha" .mysqli_errno($con));
}