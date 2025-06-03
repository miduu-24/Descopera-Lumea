function adaugaFavorite(id) {
  fetch('favorite.php', {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: 'id=' + id
  })
  .then(r => r.text())
  .then(msg => alert(msg));
}
