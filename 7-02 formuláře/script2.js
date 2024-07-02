console.log("Funguju");

const form = document.querySelector(".main-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Formulář byl odeslán.");
    console.log(event.target.jmeno.value);
    console.log(event.target.heslo.value)
    console.log(event.target.email.value)
})

