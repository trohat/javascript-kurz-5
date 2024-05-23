
let jmeno = "Marie"; // globální proměnná

if (true) {
    //let jmeno = "Petře";
    
    if (true) {
        let jmeno = "Jakube"; // lokální proměnná 
        // block scope
        console.log("dobrý den");
        console.log(jmeno);
    }
    console.log("ahoj");
    console.log(jmeno);
}

if (true) {
    console.log("nashledanou");
    console.log(jmeno);
}

console.log("děkuji");
console.log(jmeno);

