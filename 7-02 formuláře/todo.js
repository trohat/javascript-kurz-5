console.log("Úkoly budou!");

const input = document.getElementById("novy-ukol");
const button = document.querySelector(".pridat");
const list = document.querySelector(".seznam-ukolu");

function vytvorNovyUkol(popisUkolu) {
    const li = document.createElement("li");
    li.classList.add("polozka");

    // const div = document.createElement("div");
    const span = document.createElement("span");
    span.textContent = popisUkolu;
    const input = document.createElement("input");
    input.type = "checkbox";

    input.addEventListener("change", function(event) {
        const target = event.target;
        const li = target.closest(".polozka");
        li.remove();
    })
    li.append(span);
    li.append(input);
    // li.append(div);
    list.append(li);
}

button.addEventListener("click", function() {
    const ukol = input.value;
    input.value = "";
    console.log(ukol);
    vytvorNovyUkol(ukol);
})

