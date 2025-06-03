<?php
include 'db.php';
include 'auth.php';

$user_id = $_SESSION['user_id'];

$sql = "SELECT d.* FROM destinatii d
        JOIN favorite f ON d.id = f.destinatie_id
        WHERE f.user_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();
?>

<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <title>Favoritele mele</title>
  <link rel="stylesheet" href="Css/All.css">
  <style>
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      padding: 20px;
    }
    .card {
      background: white;
      border-radius: 10px;
      padding: 15px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .card img {
      width: 100%;
      max-height: 200px;
      object-fit: cover;
      border-radius: 8px;
    }
    .card h3 {
      margin: 10px 0 5px;
    }
    .pret {
      color: green;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1 style="text-align:center;">Favoritele mele</h1>
  <div class="grid">
    <?php while ($row = $result->fetch_assoc()): ?>
      <div class="card">
        <img src="<?= htmlspecialchars($row['imagine']) ?>" alt="Imagine">
        <h3><?= htmlspecialchars($row['nume']) ?> (<?= htmlspecialchars($row['tara']) ?>)</h3>
        <p><?= nl2br(htmlspecialchars($row['descriere'])) ?></p>
        <p class="pret"><?= $row['pret'] ?> EUR</p>
      </div>
    <?php endwhile; ?>
  </div>
</body>
</html>
