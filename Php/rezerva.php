<?php
include 'db.php';
session_start();

if (!isset($_SESSION['user_id'])) {
    echo "Trebuie să fii autentificat.";
    exit;
}

$user_id = $_SESSION['user_id'];
$dest_id = intval($_POST['id']);

$stmt = $conn->prepare("INSERT INTO rezervari (user_id, destinatie_id) VALUES (?, ?)");
$stmt->bind_param("ii", $user_id, $dest_id);
if ($stmt->execute()) {
    echo "Rezervare efectuată!";
} else {
    echo "Eroare la rezervare.";
}
?>
