<?php
include 'db.php';
session_start();

if (!isset($_SESSION['user_id'])) {
    echo "Autentificare necesară.";
    exit;
}

$user_id = $_SESSION['user_id'];
$dest_id = intval($_POST['id']);

// Prevenim duplicate
$check = $conn->prepare("SELECT * FROM favorite WHERE user_id=? AND destinatie_id=?");
$check->bind_param("ii", $user_id, $dest_id);
$check->execute();
$result = $check->get_result();

if ($result->num_rows > 0) {
    echo "Această destinație e deja în favorite.";
} else {
    $stmt = $conn->prepare("INSERT INTO favorite (user_id, destinatie_id) VALUES (?, ?)");
    $stmt->bind_param("ii", $user_id, $dest_id);
    if ($stmt->execute()) {
        echo "Adăugat la favorite!";
    } else {
        echo "Eroare la salvare.";
    }
}
?>
