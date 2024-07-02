console.log("Skript propojen");

// pro práci s políčky formuláře existují dvě, případně další dvě základní události:
// input, change, případně focus a blur

const input = document.querySelector(".main-input");
const paragraph = document.querySelector(".text");
const checkbox = document.querySelector('[type="checkbox"]')   

checkbox.addEventListener("input", function(event) {
    console.log(event.target.checked);
}) 

input.addEventListener("input", function(event) {
    const value = event.target.value;
    paragraph.textContent = `V políčku právě je tento text: ${value}`;
})

input.addEventListener("input", function(event) {
    console.log("😈👿😈😈")
})

input.addEventListener("change", function(event) {
    const value = event.target.value;
    console.log(`V políčku právě je tento text: ${value}`);
})

input.addEventListener("focus", function() {
    console.log("Přišel focus");
})

input.addEventListener("blur", function() {
    console.log("Přišel blur");
})

