<?php
include 'db.php';
include 'auth.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nume = $_POST['nume'];
    $tara = $_POST['tara'];
    $descriere = $_POST['descriere'];
    $pret = $_POST['pret'];

    // Gestionare fișier imagine
    $target_dir = "uploads/";
    $file_name = basename($_FILES["imagine"]["name"]);
    $target_file = $target_dir . uniqid() . "_" . $file_name;

    if (move_uploaded_file($_FILES["imagine"]["tmp_name"], $target_file)) {
        $stmt = $conn->prepare("INSERT INTO destinatii (nume, tara, descriere, pret, imagine) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("sssds", $nume, $tara, $descriere, $pret, $target_file);
        $stmt->execute();
        echo "Destinație adăugată cu imagine!";
    } else {
        echo "Eroare la încărcarea imaginii.";
    }
}
?>

<form method="post" enctype="multipart/form-data">
    Nume: <input name="nume"><br>
    Țara: <input name="tara"><br>
    Descriere: <textarea name="descriere"></textarea><br>
    Preț: <input name="pret" type="number" step="0.01"><br>
    Imagine: <input type="file" name="imagine" accept="image/*"><br>
    <input type="submit" value="Adaugă">
</form>
