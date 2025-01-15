var printVertically = function(s) {
    let stringArray = [];
    let word = '';

    for (let i = 0; i < s.length; i++) {
        
        if (s[i] !== ' ') {
            word += s[i];
            console.log(word);
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
};

console.log(printVertically("HOW ARE YOU"));