// 1. find occurrance of each charecter
// 2. traverse in the each charater count
// 3. when the count of any character is found 1 for the first time during travarse return index of the character.
// 4. if the count of any character is not found 1 in any character then return -1.

var firstUniqChar = function(s) {
    let charCount = new Map();
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        
        if (charCount.get(s[i]) == undefined) {

            charCount.set(s[i], 1);
        }
        else {

            charCount.set(s[i], charCount.get(s[i]) + 1);
        }
    } 
    
    for (let k of charCount.keys()) {

        if (charCount.get(k) == 1) {
            result = i;
            break;
        }
        else {
            result = -1;
        }
    }
    
    return result;
};

console.log(firstUniqChar("leetcode"));

console.log(firstUniqChar("loveleetcode"));

console.log(firstUniqChar("aabb"));