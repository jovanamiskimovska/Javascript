let myBody = document.getElementsByTagName("body")[0];
let buttonT = document.getElementById("button1");

function createTable(r, c) {
    let tableNew = document.createElement("table");
    tableNew.setAttribute("border", "1");
    for (let i = 1; i <= r; i++) {
        let row = document.createElement("tr");
        for (let j = 1; j <= c; j++) {
            let column = document.createElement("td");
            column.innerText = `Row ${i} Column ${j}`;
            row.appendChild(column);
        }
        tableNew.appendChild(row);
    }
    myBody.appendChild(tableNew);
}

let rowInput = parseInt(prompt("Enter the number of rows of the table"));
let columnInput = parseInt(prompt("Enter the number of columns of the table"));

buttonT.addEventListener("click", function () {
    createTable(rowInput, columnInput);
})