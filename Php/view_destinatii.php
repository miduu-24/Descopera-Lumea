<?php
include 'db.php';
$result = $conn->query("SELECT * FROM destinatii");

while ($row = $result->fetch_assoc()) {
    echo "<h3>" . htmlspecialchars($row['nume']) . " (" . htmlspecialchars($row['tara']) . ")</h3>";
    echo "<img src='" . htmlspecialchars($row['imagine']) . "' width='200'><br>";
    echo "<p>" . htmlspecialchars($row['descriere']) . "</p>";
    echo "<strong>" . $row['pret'] . " EUR</strong><br>";
    echo "<a href='delete_destinatie.php?id=" . $row['id'] . "'>Șterge</a> | ";
    echo "<a href='update_destinatie.php?id=" . $row['id'] . "'>Editează</a><br><hr>";
}
?>
