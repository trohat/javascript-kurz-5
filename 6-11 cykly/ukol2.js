let tabulka = document.querySelector(".sachovnice");

let obsahTabulky = "";
let velikostSachovnice = Number(prompt("Zadej velikost šachovnice: "))

for (let i = 1; i <= velikostSachovnice; i++) {
    obsahTabulky += "<tr>";
    for (let j = 1; j <= velikostSachovnice; j ++) {
        if ((i + j) % 2 == 0) {
            obsahTabulky += `<td></td>`;
        } else {
            obsahTabulky += `<td class="black"></td>`;
        }
    }
    obsahTabulky += "</tr>";
}
tabulka.innerHTML = obsahTabulky;