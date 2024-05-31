let words = ["mother", "father", "son", "daughter", "brother", "sister",]

function getWord(words){
    let  Rnum= Math.floor(Math.random() * words.length);
    return words[Rnum];
}

function randomWord(words){
    let rWord = []
    let Rwords = getWord(words);
    let fWord = []
    for (let i = Rwords.length -1; i >= 0; i--){
        rWord.push(Rwords[i]);
    }

    for (let i = rWord.length -1; i >= 0; i--){
        for (let j = 0; j < 3; j++){
            fWord.push(rWord[j]);
        }
    }
    return fWord;
}

console.log(randomWord(words));