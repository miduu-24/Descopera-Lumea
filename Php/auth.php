<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: Lab5/Html/Autentificare.html");
    exit;
}
?>
