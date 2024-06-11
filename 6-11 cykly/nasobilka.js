let tabulka = document.querySelector(".nasobilka");

let obsahTabulky = "";

for (let i = 1; i <= 10; i++) {
    obsahTabulky += "<tr>";
    for (let j = 1; j <= 10; j ++) {
        obsahTabulky += `<td>${i * j}</td>`;
    }
    obsahTabulky += "</tr>";
}

tabulka.innerHTML = obsahTabulky;

