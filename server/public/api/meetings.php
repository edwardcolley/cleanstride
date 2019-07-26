<?php

header('Content-Type: application/json');
require('functions.php');

set_exception_handler('handleError');
startUp();

require_once('db_connection.php');


if (!empty($_GET['day'] && !empty($_GET['city']))) {
  $day = mysqli_real_escape_string( $conn,$_GET['day']);
  $city = mysqli_real_escape_string( $conn,$_GET['city']);
  

  $query = "SELECT * FROM `aa_meetings` WHERE `day` = '$day' AND `city` = '$city'";

  $result = mysqli_query($conn, $query);

  if(!$result) {
    throw new Exception('Error: no result returned: ' . mysqli_error($conn));
  }

  $data = [];
  while($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
  }

  print(json_encode($data));
} 
?>