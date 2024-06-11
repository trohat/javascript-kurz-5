// Calculate the sum of all numbers in a range specified by the user.

// 5,9 => 5+6+7+8+9 => 35

// 1,4 => 1+2+3+4 => 10

let zacatek, konec;

zacatek = prompt("Zadej začátek rozsahu: ");
konec = prompt("Zadej konec rozsahu: ");

zacatek = Number(zacatek);
konec = Number(konec);

if (zacatek > konec) {
    pomocnaPromenna = zacatek;
    zacatek = konec;
    konec = pomocnaPromenna;
}

let soucet = 0;

for (let index = zacatek; index <= konec; index++) {
   soucet += index;
}

console.log(`Součet čísel od ${zacatek} do ${konec} je ${soucet}`);
