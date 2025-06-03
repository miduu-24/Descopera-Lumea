var usernameError = document.getElementById("usernameError");
var nicknameError = document.getElementById("nicknameError");
var passwordError = document.getElementById("passwordError");
var passwordReatError = document.getElementById("repeatPasswordError");
var emailError = document.getElementById("emailError");
var phoneError = document.getElementById("phoneError");
var birthdateError = document.getElementById("birthdateError");

function checkUsername() {
  var username = document.getElementById("username").value;

  if (username.length == 0) {
    usernameError.innerHTML = "<i class='error'></i>";
    return false;
  }

  if (username.match(/^[a-z0-9]+$/) == null) {
    usernameError.innerHTML = "<i class='error'></i>";
    return false;
  }

  usernameError.innerHTML = "<i></i>";
  return true;
}

function checkNickname() {
  var nickname = document.getElementById("nickname").value;

  if (nickname.length == 0) {
    nicknameError.innerHTML = "<i class='error'></i>";
    return false;
  }

  if (nickname.match(/^[a-z0-9]+$/) == null) {
    nicknameError.innerHTML = "<i class='error'></i>";
    return false;
  }

  nicknameError.innerHTML = "<i></i>";
  return true;
}

function checkPassword() {
  var password = document.getElementById("password").value;

  if (password.length == 0) {
    passwordError.innerHTML = "<i class='error'></i>";
    return false;
  }

  if (password.match(/^[a-zA-Z0-9!]+$/) == null) {
    passwordError.innerHTML = "<i class='error'></i>";
    return false;
  }

  passwordError.innerHTML = "<i></i>";
  return true;
}

function checkPasswordRepeat() {
  var password = document.getElementById("password").value;
  var passwordRepeat = document.getElementById("repeat-password").value;

  if (passwordRepeat.length == 0) {
    passwordReatError.innerHTML = "<i class='error'></i>";
    return false;
  }

  if (password != passwordRepeat) {
    passwordReatError.innerHTML = "<i class='error'></i>";
    return false;
  }

  passwordReatError.innerHTML = "<i></i>";
  return true;
}

function checkEmail() {
  var email = document.getElementById("email").value;

  if (email.length == 0) {
    emailError.innerHTML = "<i class='error'></i>";
    return false;
  }

  if (email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/) == null) {
    emailError.innerHTML = "<i class='error'></i>";
    return false;
  }

  emailError.innerHTML = "<i></i>";
  return true;
}

function checkPhone() {
  var phone = document.getElementById("telefon").value;
  var phoneError = document.getElementById("phoneError"); // Asigură-te că ai un element cu acest ID

  if (phone.length == 0) {
    phoneError.innerHTML = "<i class='error'></i>";
    return false;
  }

  if (!phone.match(/^\(\+40\)\s?7\d{2}\s?\d{3}\s?\d{3}$/)) {
    phoneError.innerHTML = "<i class='error'></i>";
    return false;
  }

  phoneError.innerHTML = "<i class='success'></i>"; // Schimbăm iconița pentru valid
  return true;
}

function valideazaData() {
  var dataInput = document.getElementById("birthdate");
  var data = dataInput.value; // Format: "YYYY-MM-DD"

  if (!data) {
    birthdateError.innerHTML = "<i class='error'></i>";
    return false;
  }

  // Extragem anul, luna și ziua
  let [year, month, day] = data.split("-").map(Number);

  // Verificăm dacă data este validă
  let date = new Date(year, month - 1, day);
  if (
    date.getFullYear() === year &&
    date.getMonth() + 1 === month &&
    date.getDate() === day
  ) {
    birthdateError.innerHTML = "<i></i>";
    return true;
  } else {
    birthdateError.innerHTML = "<i class='error'></i>";
    return false;
  }
}

const judeteOrase = {
  București: [
    "Sector 1",
    "Sector 2",
    "Sector 3",
    "Sector 4",
    "Sector 5",
    "Sector 6",
  ],
  Cluj: ["Cluj-Napoca", "Turda", "Dej", "Gherla"],
  Timiș: ["Timișoara", "Lugoj", "Jimbolia"],
  Iași: ["Iași", "Pașcani", "Târgu Frumos"],
};

const judetDropdown = document.getElementById("judet");
const orasDropdown = document.getElementById("oras");

for (const judet in judeteOrase) {
  let opt = document.createElement("option");
  opt.value = judet;
  opt.textContent = judet;
  judetDropdown.appendChild(opt);
}

function updateOrase() {
  const selectedJudet = judetDropdown.value;
  orasDropdown.innerHTML = '<option value="">Selectează un oraș</option>';

  if (selectedJudet) {
    judeteOrase[selectedJudet].forEach((oras) => {
      let opt = document.createElement("option");
      opt.value = oras;
      opt.textContent = oras;
      orasDropdown.appendChild(opt);
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function (event) {
    let valid = true;

    if (!checkUsername()) valid = false;
    if (!checkNickname()) valid = false;
    if (!checkPassword()) valid = false;
    if (!checkPasswordRepeat()) valid = false;
    if (!checkEmail()) valid = false;
    if (!checkPhone()) valid = false;
    if (!valideazaData()) valid = false;

    if (!valid) {
      event.preventDefault();
      alert("Nu toate câmpurile sunt completate corect!");
    }
  });
});
