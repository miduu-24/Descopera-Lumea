<?php
include 'db.php';
include 'auth.php';

$id = $_GET['id'];
$conn->query("DELETE FROM destinatii WHERE id=$id");
header("Location: view_destinatii.php");
?>
