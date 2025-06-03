<?php include '../auth.php'; ?>
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8" />
  <title>Pagina Principală</title>
  <link rel="stylesheet" href="../Css/All.css" />
  <link rel="stylesheet" href="../Css/MainPage.css" />
</head>
<body>
  <header>
    <h1>Bun venit, <?= htmlspecialchars($_SESSION['username']) ?>!</h1>
    <a href="../logout.php">Logout</a>
  </header>

  <main>
    <!-- Conținutul tău -->
  </main>
</body>
</html>
