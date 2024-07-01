document.addEventListener("DOMContentLoaded", () => {

    console.log("události");

    let nadpis = document.querySelector("h1");
    let tlacitko = document.querySelector("button");
    let odstavec = document.querySelector("p");

    function prebarviNaCerveno() {
        nadpis.classList.toggle("red");
    }


    nadpis.addEventListener("click", prebarviNaCerveno);
    nadpis.addEventListener("click", () => {
        console.log("ahoj");
    });

    tlacitko.addEventListener("click", prebarviNaCerveno);

    odstavec.addEventListener("mousemove", () => {
        odstavec.textContent = odstavec.textContent + "x ";
    });

    odstavec.addEventListener("mouseenter", () => {
        odstavec.classList.add("red");
    });

    odstavec.addEventListener("mouseleave", () => {
        odstavec.classList.remove("red");
    });

    tlacitko.onclick = function () {
        console.log("První funkce.")
    };

    tlacitko.onclick = function () {
        console.log("Připojení události lepším způsobem, ale pořád ne tím nejlepším")
        console.log("Jiná funkce")
    };


});

