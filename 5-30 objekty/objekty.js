console.log("Tohle zatím není OOP, i když se k tomu už blížíme.");

// OOP = objektově orientované programování
/*
const jmeno = "Alík";
let vaha = 15;
let vek = 1;
let barva = "červená";
const rasa = "Akita";
*/

let pes1 = {
    jmeno: "Alík",
    vaha: 15,
    vek: 1,
    barva: "červená",
    rasa: "Akita",
    "je agresivni": false,
    //kamarad: pes2,
    stekej: () => {
        console.log("Haf haf!");
    },
    trhej: () => {
        console.log("Utrhl jsem kus kalhot.");
    },
    popis: function () {
        return `Tohle je můj pes ${this.jmeno} a je to ${this.barva} ${this.rasa}.`;
    }
    
};

// hoisting - není u let, takže ho klidně můžete zapomenout
let pes2 = {
    jmeno: "Ferdinand",
    vaha: 1,
    vek: 13,
    barva: "oranžová",
    rasa: "čivava",
    "je agresivni": true,
    kamarad: pes1,
    popis: function () {
        return `Tohle je můj pes ${this.jmeno} a je to ${this.barva} ${this.rasa}.`;
    }
};

pes1.kamarad = pes2;

console.log(pes1.popis());

// pes1.jmeno = "Rex";

console.log(pes1.popis());


