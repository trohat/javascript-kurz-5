let pozdrav = "ahoj, jak se m,áš, já sk,věle";

const roztrhanyRetezec = pozdrav.split(" ")

const osetrenyRetezec = roztrhanyRetezec.map(slovo => {
    if (slovo.endsWith(",")) {
        return slovo.substring(0, slovo.length - 1);
    }
    return slovo;
})

console.log(osetrenyRetezec)
