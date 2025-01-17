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

    let verticalWords = [];

    let maxWordLength = 0;
    
    for (let i = 0; i < stringArray.length; i++) {
        maxWordLength = Math.max(maxWordLength, stringArray[i].length);
    }

    for (let i = 0; i < maxWordLength; i++) {
        let word2 = '';

        for (let j = 0; j < stringArray.length; j++) {

            if (stringArray[j].length - 1 < i) {
                word2 += ' ';
            }
            else {
                word2 += stringArray[j][i];
            }
        }

        verticalWords.push(word2);
    }

    for (let i = 0; i < verticalWords.length; i++) {
        verticalWords[i] = verticalWords[i].trimEnd();
    }

    return verticalWords;
};

console.log(printVertically("HOW ARE YOU"));

console.log(printVertically("TO BE OR NOT TO BE"));

console.log(printVertically("CONTEST IS COMING"));

console.log(printVertically("HELLO"));