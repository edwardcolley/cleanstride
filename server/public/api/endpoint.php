<?php

header('Content-Type: application/json');

if (empty($_GET['id'])) {
  readfile('test-message.json');
} 

?>