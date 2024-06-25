console.log("Propojeno, jedeme!")

const tlacitka = document.querySelectorAll("button");
const nadpis = document.querySelector("h1");

// event handler
function handleClick(event) {
    for (let i = 0; i < tlacitka.length; i++) {
        tlacitka[i].classList.remove("cervena");
    }
    console.log(event);
    // console.log("Bylo kliknuto.");
    // console.log("Typ události:", event.type);
    console.log("Target události: ")
    console.log(event.target);
    // console.log("Souřadnice:", event.x, event.y)
    event.target.classList.add("cervena");
}

//function handleDblClick

tlacitka[0].addEventListener("click", handleClick);
tlacitka[1].addEventListener("click", handleClick);
tlacitka[2].addEventListener("click", handleClick);
tlacitka[3].addEventListener("click", handleClick);

// setTimeout(() => {
//     nadpis.classList.add("cervena")
// }, 2000);

function handleMouseEnter(event) {
    console.log("vlezla na mě myš, a já už něco vím");
    console.log(event);
    console.dir(event.target);
}

nadpis.addEventListener("mouseenter", handleMouseEnter);  
// tlacitka[0].addEventListener("mouseenter", handleMouseEnter);