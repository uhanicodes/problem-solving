var removeDuplicateLetters = function(s) {
    let str = [];
    let match = false;

    for (let i = 0; i < s.length; i++) {

        for (let j = 0; j < i; j++) {

            if (s[i] == s[j]) {
                match = true;
                break;
            }
        }

        if (match == false) {
            str.push(s[i]);
        }

        match = false;
    }

    str.sort((a, b) => a - b);

    let str2 = "";

    for (let i = 0; i < str.length; i++) {
        str2 += str[i];
    }

    return str2;
};

// console.log(removeDuplicateLetters("bcabc"));
console.log(removeDuplicateLetters("cbacdcbc"));