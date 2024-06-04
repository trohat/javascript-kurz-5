
// function declaration
function scitani1(cislo1, cislo2) {
    return cislo1 + cislo2;
}


// function expression = výraz
// do proměnné v podstatě vkládám anonymní funkci
const scitani2 = function(cislo1, cislo2) {
    return cislo1 + cislo2;
};

// arrow funkce
const scitani3 = (cislo1, cislo2) => cislo1 + cislo2;


const privitej = jmeno => {
    console.log("Ahoj, osobo jménem " + jmeno + " , vítám tě!");
    console.log("Pokračuj do společenské místnosti");
    console.log("Na baru si můžeš připravit svoje oblíbené pití");
    console.log("\n");
};

const vytiskniAhoj = () => {
    console.log("Ahoj");
};

