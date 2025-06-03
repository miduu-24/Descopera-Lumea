<?php
include 'db.php';
include 'auth.php';

$id = $_GET['id'];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nume = $_POST['nume'];
    $tara = $_POST['tara'];
    $descriere = $_POST['descriere'];
    $pret = $_POST['pret'];
    $imagine = $_POST['imagine'];

    $stmt = $conn->prepare("UPDATE destinatii SET nume=?, tara=?, descriere=?, pret=?, imagine=? WHERE id=?");
    $stmt->bind_param("sss dsi", $nume, $tara, $descriere, $pret, $imagine, $id);
    $stmt->execute();
    echo "Actualizat!";
}

$dest = $conn->query("SELECT * FROM destinatii WHERE id=$id")->fetch_assoc();
?>

<form method="post">
    Nume: <input name="nume" value="<?= htmlspecialchars($dest['nume']) ?>"><br>
    Țara: <input name="tara" value="<?= htmlspecialchars($dest['tara']) ?>"><br>
    Descriere: <textarea name="descriere"><?= htmlspecialchars($dest['descriere']) ?></textarea><br>
    Preț: <input name="pret" type="number" value="<?= $dest['pret'] ?>"><br>
    Imagine (URL): <input name="imagine" value="<?= htmlspecialchars($dest['imagine']) ?>"><br>
    <input type="submit" value="Actualizează">
</form>
