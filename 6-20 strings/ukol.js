//Write a function that counts vowels in a passed string.

function countVowels(sentence) {
    let count = 0;
    const vowels = "aeiouyáéíóúůýě";
    for (let index = 0; index < sentence.length; index++) {
        let letter = sentence[index];
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count;
}

function countVowels2(sentence) {
    let count = 0;
    const vowels = "aeiouyáéíóúůýě";
    for (const letter of sentence) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count;
}
