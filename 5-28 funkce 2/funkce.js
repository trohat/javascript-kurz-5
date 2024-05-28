/* Write a function that takes 2 numbers and returns -1 if the first
is less than the second, 1 if the first is greater than the second,
and 0 if the numbers are equal. */

console.log("Běhá to");

function porovnani(cislo1, cislo2) {
    if (cislo1 > cislo2) {
        return 1;
    } else if (cislo1 < cislo2) {
        return -1;
    } else if (cislo1 === cislo2) {
        return 0;
    } else {
        console.log("Chyba");
    }
}

let prvniPromenna = Number(prompt("Zadej první číslo pro porovnání"));
let druhaPromenna = Number(prompt("Zadej druhé číslo pro porovnání"));

porovnani(prvniPromenna, druhaPromenna);

if (vysledek === 1) {
    console.log("První číslo je větší");
} else if (vysledek === -1) {
    console.log("Druhé číslo je větší");
} else if (vysledek === 0) {
    console.log("Čísla jsou stejná.")
} else {
    console.error("Velká chyba!");
}