

function vypocitejZisk(prijmy, vydaje) {
    
    let zisk = prijmy - vydaje;
    return zisk;
}

let prijmy = 100000;
let vydaje = 90000;

let zisk = vypocitejZisk(prijmy, vydaje);

console.log("Letos jsi vydělal: " + zisk);

function vypocitejZiskPoZdaneni(prijmy, vydaje) {
    
    let zisk = (prijmy - vydaje) - dan;
    return zisk;
}

let ziskPoZdaneni = vypocitejZiskPoZdaneni(prijmy, vydaje) 