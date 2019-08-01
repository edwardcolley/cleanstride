<?php
require_once('db_connection.php');

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];
$item = file_get_contents('php://input');
if ($method == 'POST') {
    http_response_code(201);
    $itemConverted = json_decode($item);


    $sql = "UPDATE `AA` SET `favorite` = 'true' WHERE `id` = '$itemConverted->id'";
    $return_value = mysqli_query($conn, $sql);
    print(json_encode([
        'success' => $return_value
    ]));
};

?>