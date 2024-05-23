
function vypocitejZisk(prijmy, vydaje) {
    let zisk = prijmy - vydaje;
    console.log("Zisk je " + zisk);
}

function vypocitejZisk2(prijmy, vydaje) {
    let zisk = prijmy - vydaje;
    return zisk;
}

// vypocitejZisk(100, 90);

let vypocitanyZisk = vypocitejZisk2(100, 90);

console.log("Zisk je " + vypocitanyZisk)
vypocitanyZisk = null;
console.log("Zisk je " + vypocitanyZisk)

