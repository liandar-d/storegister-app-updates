function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
}

function deleteModalRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("modalTable").deleteRow(i);
}

// insurance table add and delete row functions
  
  function InsuranceAddRow() {
    var table = document.getElementById("table");
    var row = table.insertRow(3);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    cell1.innerHTML = "4";
    cell2.innerHTML = "Lorem ipsum dolor sit amet Consectetur";
    cell2.className = 'custom-width-first';
    cell3.innerHTML = '<td class="custom-width-second"><input type="number" class="form-control" placeholder="200"></td>';
    cell3.className = 'custom-width-second';
    cell4.innerHTML = "$9,928";
    cell5.innerHTML = "$9,928";
    cell6.innerHTML = "$9,928";
    cell7.innerHTML = "$9,928";
    cell8.innerHTML = '<span class="material-icons" onclick="deleteRow(this)"><span class="material-icons">close</span></span>';
  }

  function InsurancedeleteModalRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
}

// Services table add and delete row functions
  
function ServicesAddRow() {
  var table = document.getElementById("ServicesTable");
  var row = table.insertRow(4);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  cell1.innerHTML = "5";
  cell2.innerHTML = "Lorem ipsum dolor sit amet Consectetur";
  cell2.className = 'custom-width-first';
  cell3.innerHTML = '<td class="custom-width-second"><input type="number" class="form-control" placeholder="200"></td>';
  cell3.className = 'custom-width-second';
  cell4.innerHTML = "$9,928";
  cell5.innerHTML = "$9,928";
  cell6.innerHTML = "$9,928";
  cell7.innerHTML = '<span class="material-icons" onclick="ServicesAddRow()"><span class="material-icons-round">add_circle</span></span><span class="material-icons" onclick="ServicesdeleteRow(this)"><span class="material-icons-round">remove_circle</span></span>';
}

function ServicesdeleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("ServicesTable").deleteRow(i);
}

// Rental table add and delete row functions
  
function RentalAddRow() {
  var table = document.getElementById("table");
    var row = table.insertRow(3);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    cell1.innerHTML = "4";
    cell2.innerHTML = "Lorem ipsum dolor sit amet Consectetur";
    cell2.className = 'custom-width-first';
    cell3.innerHTML = '<td class="custom-width-second"><input type="number" class="form-control" placeholder="200"></td>';
    cell3.className = 'custom-width-second';
    cell4.innerHTML = "$9,928";
    cell5.innerHTML = "$9,928";
    cell6.innerHTML = "$9,928";
    cell7.innerHTML = "$9,928";
    cell8.innerHTML = '<span class="material-icons" onclick="deleteRow(this)"><span class="material-icons">close</span></span>';
}

function RentaldeleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("table").deleteRow(i);
}