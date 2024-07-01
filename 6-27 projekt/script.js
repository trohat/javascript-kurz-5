console.log("Propojeno")

const canvas = document.getElementById("main-canvas")
const shakeButton = document.getElementById("shake-button")
const ctx = canvas.getContext("2d");

console.log(ctx);
// const width = canvas.width;
// const height = canvas.height;
const { width, height } = canvas; // object destructuring
const SIZE = 60;
let hue = 0;

ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.lineWidth = SIZE;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();  

function draw(key) {
    ctx.beginPath();
    hue = hue + 10;
    ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
    ctx.moveTo(x, y);
    switch (key) {
        case "ArrowUp":
            y -= SIZE;
            break;
        case "7":
            y -= SIZE;
            x -= SIZE;
            break;
        case "ArrowDown": 
            y += SIZE;
            break;
        case "ArrowLeft":
            x -= SIZE;
            break; 
        case "ArrowRight": 
            x += SIZE;
            break;
        default: 
            break;
    }
    if (x <= SIZE / 2) {
        x = SIZE / 2;
    }
    if (y - (SIZE/2) < 0) {
        y = SIZE/2;
    }
    if (x + (SIZE / 2) > width) {
        x = width - (SIZE / 2)
    }
    if (y + (SIZE / 2) > height) {
        y = height - (SIZE / 2)
    }
    ctx.lineTo(x, y);
    ctx.stroke(); 
}

function handleKeyDown(event) {
    if (event.key.includes("Arrow") || event.key === "7") {
        event.preventDefault();
        // console.log(event.key);
        draw(event.key);
    }
}

function handleButtonClick() {
    console.log("Třeseme....")
    ctx.clearRect(0, 0, width, height);
    canvas.classList.add("shake")
    canvas.addEventListener("animationend", function() {
        canvas.classList.remove("shake");
        console.log("Animace skončila.");
    }, { once: true })
}

window.addEventListener("keydown", handleKeyDown);
shakeButton.addEventListener("click", handleButtonClick);

