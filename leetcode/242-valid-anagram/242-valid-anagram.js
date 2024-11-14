var isAnagram = function(s, t) {

    if (s.length !== t.length) {
        return false;
    }

    let x = countChars(s);
    let y = countChars(t);

    for (const k of x.keys()) {

        if (x.get(k) !== y.get(k)) {
            return false;
        }
    }

    return true;
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

    return charCount;
}

console.log(isAnagram("anagram", "nagaram"));

console.log(isAnagram("rat", "car"));

console.log(isAnagram("aab", "abc"));

console.log(isAnagram("a", "ab"));

console.log(isAnagram("aa", "a"));

console.log(isAnagram("aacc", "ccac"));