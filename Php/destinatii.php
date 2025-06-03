<?php
include 'db.php';
include 'auth.php';

$result = $conn->query("SELECT * FROM destinatii");
?>

<!DOCTYPE html>
<html lang="ro">

<head>
  <meta charset="UTF-8">
  <title>Destinații turistice</title>
  <link rel="stylesheet" href="Css/All.css">
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
    }

    .card {
      border: 1px solid #ccc;
      border-radius: 10px;
      padding: 15px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      background: #fff;
    }

    .card img {
      width: 100%;
      border-radius: 8px;
      max-height: 200px;
      object-fit: cover;
    }

    .card h3 {
      margin-top: 10px;
    }

    .card .act {
      margin-top: 10px;
    }

    .card .pret {
      color: #008000;
      font-weight: bold;
    }

    .card button {
      margin-right: 10px;
    }
  </style>
</head>

<body>

  <h1>Destinații disponibile</h1>
  <div class="grid">
    <?php while ($row = $result->fetch_assoc()): ?>
      <div class="card">
        <img src="<?= htmlspecialchars($row['imagine']) ?>" alt="Imagine destinatie">
        <h3><?= htmlspecialchars($row['nume']) ?> (<?= htmlspecialchars($row['tara']) ?>)</h3>
        <p><?= nl2br(htmlspecialchars($row['descriere'])) ?></p>
        <p class="pret"><?= $row['pret'] ?> EUR</p>
        <div class="act">
          <a href="update_destinatie.php?id=<?= $row['id'] ?>"><button>Editează</button></a>
          <a href="delete_destinatie.php?id=<?= $row['id'] ?>"><button>Șterge</button></a>
          <button onclick="rezerva(<?= $row['id'] ?>)">Rezervă</button>
          <button onclick="adaugaFavorite(<?= $row['id'] ?>)">❤️ Favorite</button>
        </div>
      </div>
    <?php endwhile; ?>
  </div>

</body>

</html>
<script src="rezerva.js"></script>
<script src="favorite.js"></script>
