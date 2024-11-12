var isAnagram = function(s, t) {
    
    if (s.length !== t.length) {
        return false;
    }

    if (checkOccurance(s, t) == false) {
        return false;
    }
    
    return checkOccurance(t, s);
};


let checkOccurance = (s, t) => {
    let anagram = true;

    for (let i = 0; i < s.length; i++) {
        let occur = false;

        for (let j = 0; j < t.length; j++) {

            if (s[i] == t[j]) {
                occur = true;
                break;
            }
        }

        if (!occur) {
            anagram = false;
            break;
        }
    }

    return anagram;
};

console.log(isAnagram("anagram", "nagaram"));

console.log(isAnagram("rat", "car"));

console.log(isAnagram("aab", "abc"));

console.log(isAnagram("a", "ab"));

console.log(isAnagram("aa", "a"));

console.log(isAnagram("aacc", "ccac"));