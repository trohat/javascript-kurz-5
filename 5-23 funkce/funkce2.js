console.log("Funkce 2");

function scitaniCisel(cislo1, cislo2) {
    cislo1 = 89;
    let vysledek = cislo1 + cislo2;
    console.log("Výsledek sčítání je " + vysledek);
    return vysledek;
}

let cislo1 = 5;
let cislo2 = 8;

let vysledek = scitaniCisel(cislo1, cislo2);   

console.log("Když jsem minule počítal, vyšlo tohle: " + vysledek);