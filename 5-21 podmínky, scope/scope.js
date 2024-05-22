
let jmeno1 = "Marie"; // globální proměnná

if (true) {
    //let jmeno = "Petře";
    
    if (true) {
        let jmeno2 = "Jakube"; // lokální proměnná 
        // block scope
        console.log("dobrý den");
        console.log(jmeno2);
    }
    console.log("ahoj");
    console.log(jmeno1);
}

if (true) {
    console.log("nashledanou");
    console.log(jmeno1);
}

console.log("děkuji");
console.log(jmeno1);

