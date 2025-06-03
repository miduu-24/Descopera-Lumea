$(document).ready(function () {
  var tari = [
    "România",
    "Franța",
    "Germania",
    "Italia",
    "Spania",
    "Grecia",
    "Ungaria",
    "Polonia",
    "Portugalia",
    "Olanda",
    "Austria",
    "Belgia",
    "Norvegia",
    "Suedia",
    "Danemarca",
    "Elveția",
  ];

  var dropdown = $("#dropdownTari");

  // funcție care populează dropdown-ul
  function afiseazaTari(filtru) {
    dropdown.empty();
    var rezultate = tari.filter(function (tara) {
      return tara.toLowerCase().indexOf(filtru) > -1;
    });

    rezultate.forEach(function (item) {
      dropdown.append("<div>" + item + "</div>");
    });

    if (rezultate.length > 0) {
      dropdown.show();
    } else {
      dropdown.hide();
    }
  }

  // când dai focus pe input, afișează toate
  $("#searchInput").on("focus", function () {
    afiseazaTari("");
  });

  // la fiecare tastare — filtrează
  $("#searchInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    afiseazaTari(value);
  });

  // selectează din dropdown
  $(document).on("click", "#dropdownTari div", function () {
    $("#searchInput").val($(this).text());
    dropdown.hide();
  });

  // ascunde dropdown dacă dai click în afara lui
  $(document).click(function (e) {
    if (!$(e.target).closest("#searchInput, #dropdownTari").length) {
      dropdown.hide();
    }
  });
});
