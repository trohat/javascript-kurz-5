

// function nasobeni(cislo1, cislo2) {
//     let vysledek = cislo1 * cislo2;
//     return vysledek;
// }

function nasobeni(cislo1, cislo2 = 2) {
    return cislo1 * cislo2;
}


function pozdrav(jmeno = "Eliško") {
    console.log(`Ahoj ${   jmeno   }!`);
}

// template string, nebo taky template literal
// pomocí backticků, dolaru a {} vkládáme proměnné