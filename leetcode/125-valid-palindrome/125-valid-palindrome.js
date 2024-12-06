var isPalindrome = function(s) {
    let newString = removeNonAlphanumeric(s);
    return newString;
}

let removeNonAlphanumeric = (s) => {
        return s.replace(/[^a-zA-Z0-9]/g, '');
}

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));

console.log(reverseString(isPalindrome("A man, a plan, a canal: Panama")));