<?php
require_once('db_connection.php');

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];
$item = file_get_contents('php://input');
if ($method == 'POST') {
  http_response_code(201);
  $itemConverted = json_decode($item);

  
  $sql = "INSERT INTO `Favorites` (program, program_id)
            VALUES ('AA', $itemConverted->id)";
  $return_value = mysqli_query($conn, $sql);
  print(json_encode([
      'success' => $return_value
  ]));
} else if ($method == 'GET') {
    http_response_code(201);
    $query = "SELECT a.day, a.city, a.time, a.type, a.name, a.address, a.zip, a.id,
            f.program_id
            FROM `AA` AS a
            JOIN `Favorites`AS f ON a.id = f.program_id";

    $result = mysqli_query($conn, $query);

    if(!$result) {
        throw new Exception('Error: no result returned: ' . mysqli_error($conn));
    }

    $data = [];
    while($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
    }

    print(json_encode($data));
} else {
  http_response_code(404);
  print(json_encode([
    'error' => 'Not Found',
    'message' => "Cannot $method /api/favorites.php"
  ]));
}

?>