<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Preluare date
    $username = trim($_POST['username']);
    $nickname = $_POST['nickname'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    $email = $_POST['email'];
    $nume = $_POST['nume'];
    $prenume = $_POST['prenume'];
    $telefon = $_POST['telefon'];
    $birthdate = $_POST['birthdate'];
    $role = isset($_POST['role']) ? implode(',', (array)$_POST['role']) : '';
    $detalii = $_POST['subject'];
    $age = $_POST['age'];
    $country = $_POST['country'] ?? '';
    $judet = $_POST['judet'] ?? '';
    $oras = $_POST['oras'] ?? '';
    $accept_terms = isset($_POST['terms']) ? 1 : 0;
    $notifications = isset($_POST['notifications']) ? 1 : 0;

    // Verificare unicitate
    $check = $conn->prepare("SELECT id FROM users WHERE username = ?");
    $check->bind_param("s", $username);
    $check->execute();
    $check->store_result();

    if ($check->num_rows > 0) {
        echo "Numele de utilizator există deja.";
    } else {
        $sql = "INSERT INTO users 
        (username, nickname, password, email, nume, prenume, telefon, birthdate, role, detalii, age, country, judet, oras, accept_terms, notifications)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssssssssssisssii",
            $username, $nickname, $password, $email,
            $nume, $prenume, $telefon, $birthdate,
            $role, $detalii, $age, $country, $judet,
            $oras, $accept_terms, $notifications
        );

        if ($stmt->execute()) {
            echo "Cont creat cu succes! <a href='Lab5/Html/Autentificare.html'>Autentificare</a>";
        } else {
            echo "Eroare la creare cont.";
        }
    }
}
?>
