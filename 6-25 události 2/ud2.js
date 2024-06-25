const div = document.querySelector(".tlacitkovy");
const pridavaciButton = document.querySelector(".pridat");
let count = 6;

// event handler
function handleClick(event) {
    console.log("Událost proběhla.")
    if (event.target.nodeName !== "BUTTON") return;
    const tlacitka = document.querySelectorAll(".barevne");
    for (let i = 0; i < tlacitka.length; i++) {
        tlacitka[i].classList.remove("cervena");
    }
    event.target.classList.add("cervena");
}

div.addEventListener("click", handleClick)

function createButton() {
    count++;
    let tlacitko = document.createElement("button");
    tlacitko.classList.add("barevne");
    tlacitko.textContent = `Klikni na mě. ${count}`
    tlacitko.addEventListener("click", handleClick)
    div.append(tlacitko);
}

pridavaciButton.addEventListener("click", createButton)
