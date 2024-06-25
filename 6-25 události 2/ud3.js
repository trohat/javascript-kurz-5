const div = document.querySelector(".tlacitkovy");
const button = document.querySelector(".barevne");
const body = document.body;
const html = document.documentElement;


function handleClick(event) {
    console.log("Někdo na mě klikl.")
    console.log(`Kdo jsem: ${event.currentTarget.nodeName}`)
    console.log(`Kam se kliklo doopravdy: ${event.target.nodeName}`)
    event.stopPropagation()
}

button.addEventListener("click", handleClick);
div.addEventListener("click", handleClick);
body.addEventListener("click", handleClick);
html.addEventListener("click", handleClick);

const a = document.querySelector("a");

function handleClick2(event) {
    console.log("Kliknuto na odkaz.")
    event.preventDefault();
}

a.addEventListener("click", handleClick2)


