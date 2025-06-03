<?php
session_start();
session_unset();
session_destroy();
header("Location: Lab5/Html/Autentificare.html");
exit;
?>
