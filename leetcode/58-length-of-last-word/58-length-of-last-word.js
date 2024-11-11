var lengthOfLastWord = function(s) {
    let length = 0;

    for (let i = 0; i < s.length; i++) {
        
        if (s[i] !== ' ') {
            length++;
        }

        if (i > 0 && s[i-1] == ' ' && s[i] !== ' ') {
            length = 1;
        }
    }
    
    return length;
};

console.log(lengthOfLastWord("Hello World"));

console.log(lengthOfLastWord("   fly me   to   the moon  "));

console.log(lengthOfLastWord("luffy is still joyboy"));

console.log(lengthOfLastWord("Hello"));