console.log("události");

let nadpis = document.querySelector("h1");
let tlacitko = document.querySelector("button");

function napisNecoDoKonzole() {
    console.log("Důležitá zpráva v konzoli je zde!");
}

function prebarviNadpis() {
    nadpis.style.color = "red";
}

tlacitko.addEventListener("click", napisNecoDoKonzole);

// tlacitko.addEventListener("click", prebarviNadpis);  
nadpis.addEventListener("click", prebarviNadpis);  



