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

    for (let i = 0; i < 3; i++) {
        let word2 = '';

        for (let j = 0; j < stringArray.length; j++) {

            if (stringArray[j].length - 1 < i) {
                word2 += ' ';
            }
            else {
                word2 += stringArray[j][i];
            }
        }

        console.log(i, word2);

        verticalWords.push(word2);
    }

    return verticalWords;
};

console.log(printVertically("HOW ARE YOU"));

console.log(printVertically("TO BE OR NOT TO BE"));

console.log(printVertically("CONTEST IS COMING"));