document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("#tabelSortabil th").forEach((th, index) => {
    th.addEventListener("click", function () {
      sortTable(index);
    });
  });
});

function sortTable(columnIndex) {
  const table = document.getElementById("tabelSortabil");
  const tbody = table.querySelector("tbody");
  const rows = Array.from(tbody.querySelectorAll("tr"));

  let sortedRows = rows.sort((a, b) => {
    let valA = getCellValue(a.cells[columnIndex]);
    let valB = getCellValue(b.cells[columnIndex]);

    return valA.localeCompare(valB, undefined, { numeric: true });
  });

  if (tbody.dataset.sorted === columnIndex.toString()) {
    sortedRows.reverse();
    delete tbody.dataset.sorted;
  } else {
    tbody.dataset.sorted = columnIndex.toString();
  }

  tbody.innerHTML = "";
  sortedRows.forEach((row) => tbody.appendChild(row));
}

function getCellValue(cell) {
  let img = cell.querySelector("img");
  if (img) {
    return img.alt;
  }

  return cell.textContent.trim();
}
