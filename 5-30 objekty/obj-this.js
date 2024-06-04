// tady jsme si jen hráli s tím, jak funguje this
// je to velmi pokročilé, nemusíte to vůbec řešit

let pes1 = {
    jmeno: "Alík",
    barva: "červená",
    rasa: "Akita",
    popis: function () {
        return `Tohle je můj pes ${this.jmeno} a je to ${this.barva} ${this.rasa}.`;
    }
    
};

let pes2 = {
    jmeno: "Ferdinand",
    barva: "oranžová",
    rasa: "čivava",
    kamarad: {
        jmeno: "Filip",
        barva: "hnědá",
        rasa: "jezevčík",
        popisKamarada:  function () {
            console.log("Tohle je this: ")
            console.log(this);

            return `Tohle je můj pes ${this.jmeno} a je to ${this.barva} ${this.rasa}.`;
        }
    },
    popis: function () {
        return `Tohle je můj pes ${this.jmeno} a je to ${this.barva} ${this.rasa}.`;
    }
};