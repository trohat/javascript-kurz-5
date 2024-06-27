console.log("Propojeno")

const canvas = document.getElementById("main-canvas")
const shakeButton = document.getElementById("shake-button")
const ctx = canvas.getContext("2d");

console.log(ctx);
// const width = canvas.width;
// const height = canvas.height;
const { width, height } = canvas; // object destructuring
const SIZE = 60;

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
    ctx.moveTo(x, y);
    switch (key) {
        case "ArrowUp":
            y -= SIZE;
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
    ctx.lineTo(x, y);
    ctx.stroke(); 
}

function handleClick(event) {
    if (event.key.includes("Arrow")) {
        event.preventDefault();
        // console.log(event.key);
        draw(event.key);
    }
}

window.addEventListener("keydown", handleClick);