<?php
$host = "127.0.0.1:3307"; // localhost
$user = "root"; // amar2452_np
$pass = "banana";   // NDZ^ZDk@YzUx
$db = "amar2452_np";   // La fel ca username-ul

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Conexiune eșuată: " . $conn->connect_error);
}
?>
