var countSegments = function(s) {
    let wordCount = 0;
    
    for (let i = 0; i < s.length; i++) {

        if (i > 0 && s[i] == ' ' && s[i - 1] !== ' ') {

            wordCount++;
        }
    }

    if (s.length > 0 && s[s.length - 1] !== ' ') {
        wordCount++;
    }

    return wordCount;
};

console.log(countSegments("Hello, my name is John"));

console.log(countSegments(" Hello"));

console.log(countSegments("   "));

console.log(countSegments(""));
