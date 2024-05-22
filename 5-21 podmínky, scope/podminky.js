console.log("funguju!");

// AND - zapisuje se &&
let hrajouDobryFilm = false;
let mamDostPenez = true;

// if (hrajouDobryFilm && mamDostPenez) {
//     console.log("Super, jdeme do kina.")
// } else {
//     console.log("Smůla, dnes zůstaneme doma.")
// }

// OR - zapisuje ||    
let nekdoMePozval = false;

// if (mamDostPenez || nekdoMePozval) {
//     console.log("Super, jdeme utrácet!")
// } else {
//     console.log("Dnes budeme šetřit.")
// }



// if (jmeno === "Petr") {
//     console.log("Tohle je dárek pro Petra.");
// } else if (jmeno === "Pavel") {
//     console.log("Pavle, jdi pracovat.");
// } else if (jmeno === "Jirka") {
//     console.log("Jirko, půjč mi peníze.");
// } else if (jmeno === "Milan") {
//     console.log("Milane, uvař večeři.");
// } else if (jmeno === "Jana") {
//     console.log("Jani, vymysli, co budeme dělat zítra.");
// } else {
//     console.log("Neznámý člen týmu.");
// }


let jmeno = "Jirka";

switch (jmeno) {
    case "Petr":
        console.log("Tohle je dárek pro Petra.");
        break;
    case "Pavel":
        console.log("Pavle, jdi pracovat.");
       
    case "Jirka":
        console.log("Jirko, půjč mi peníze.");
        
    case "Milan":
        console.log("Milane, uvař večeři.");
        break;
    case "Jana":
        console.log("Jani, vymysli, co budeme dělat zítra.");
        break;
    default:
        console.log("Neznámý člen týmu.");
        break;
}

let medaile = "modrá";

// switch (medaile) {
//     case "zlatá":
//         console.log("Tady máš bonboniéru.");
//     case "stříbrná":
//         console.log("Tady máš čokoládu.");
//     case "bronzová":
//         console.log("Tady máš lentilky.");
//         break;
//     default:
//         console.log("Nic nedostaneš");
// }

let vek = 25;

switch (true) {
    case (vek > 10) && (vek <= 20): 
            console.log("Tady máš bonboniéru.");
    case vek > 20 && vek <= 30:
        console.log("Tady máš čokoládu.");
    case vek > 30 && vek <= 40:
        console.log("Tady máš lentilky.");
        break;
    default:
        console.log("Nic nedostaneš");
}