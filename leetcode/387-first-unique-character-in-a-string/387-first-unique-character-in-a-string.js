var firstUniqChar = function(s) {
   
    for (let i = 0; i < s.length; i++) {
        let found = false;

        for (let j = i + 1; j < s.length; j++) {
            
            if (s[i] == s[j]) {
                found = true;
                break;
            }
        }

        if (found == false) {
            return i;
        } 
   } 

   return -1;
};

console.log(firstUniqChar("leetcode"));

console.log(firstUniqChar("loveleetcode"));

console.log(firstUniqChar("aabb"));