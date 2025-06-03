function rezerva(destinatieId) {
  fetch('rezerva.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'id=' + destinatieId
  })
  .then(r => r.text())
  .then(msg => alert(msg));
}
