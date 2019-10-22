<?php
require_once('db_connection.php');

header('Content-Type: application/json');

session_start();


if(empty($_SESSION['sessionID'])) {
  $sessionID = false;
} else {
  $sessionID = $_SESSION['sessionID'];
}

if($sessionID === false) {
$insertQuery = "INSERT INTO `user_session` 
                SET `session` = NOW()"; 
$cookie = mysqli_query($conn, $insertQuery);


if(!$cookie) {
    throw new Exception('Failed to create cart: '. mysqli_error($conn));
}
$sessionID = mysqli_insert_id($conn);
$_SESSION['sessionID'] = $sessionID; 
}

?>