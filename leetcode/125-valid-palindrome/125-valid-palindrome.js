var isPalindrome = function(s) {
    let newString = removeNonAlphanumeric(s);
    let reverseString = reverseString(newString);

    if(newString == reverseString) {
        return true;
    }
    else {
        return false;
    }
};

let removeNonAlphanumeric = (s) => {
        return s.replace(/[^a-zA-Z0-9]/g, '');
}

let reverseString = (str) => {
    var newString1 = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString1 += str[i];
    }
    return newString1;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));

// console.log(reverseString(isPalindrome("A man, a plan, a canal: Panama")));