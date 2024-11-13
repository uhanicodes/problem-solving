var isAnagram = function(s, t) {
    
    if (s.length !== t.length) {
        return false;
    }

};

let countChars = (s) => {
    
    let charCount = new Map();

    for (let i = 0; i < s.length; i++) {
        
        if (charCount.get(s[i]) == undefined) {
            charCount.set(s[i], 1);
        }
        else {
            charCount.set(s[i], charCount.get(s[i]) + 1);
        }
    }
}



console.log(isAnagram("anagram", "nagaram"));

console.log(isAnagram("rat", "car"));

console.log(isAnagram("aab", "abc"));

console.log(isAnagram("a", "ab"));

console.log(isAnagram("aa", "a"));

console.log(isAnagram("aacc", "ccac"));