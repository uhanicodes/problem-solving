var printVertically = function(s) {
    let stringArray = [];
    let word = '';

    for (let i = 0; i < s.length; i++) {
        
        if (s[i] !== ' ') {
            word += s[i];
        }
        else {
            stringArray.push(word);
            word = '';
        }

        if (i == s.length - 1) {
            stringArray.push(word);
        }
    }

    console.log(word, stringArray);

    let verticalWords = [];

    for (let i = 0; i < stringArray.length; i++) {
        let word2 = '';

        for (let j = 0; j < stringArray[i].length; j++) {
            word2 += stringArray[j][i];
        }

        verticalWords.push(word2);
    }

    return verticalWords;
};

console.log(printVertically("HOW ARE YOU"));