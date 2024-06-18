let pes1 = {
    jmeno: "Alík",
    barva: "černá",
    rasa: "vlčák",
    vek: 7,
    kamaradi: []
}


let pes2 = {
    jmeno: "Rex",
    barva: "červená",
    rasa: "Akita",
    vek: 5,
    kamaradi: []
}

pes3 = {
    jmeno: "Filip",
    barva: "hnědá",
    rasa: "vlčák",
    vek: 9,
    kamaradi: [pes1, pes2]
}

pes2.kamaradi.push(pes3);

let mojiPsi = [pes1, pes2, pes3]

mojiPsi.forEach(pes => console.log(pes.jmeno));

let starsiPsi = mojiPsi.map(pes => ({...pes, vek: pes.vek + 1}));

let vlcaci = mojiPsi.filter(pes => pes.rasa.toUpperCase() === "Vlčák".toUpperCase());