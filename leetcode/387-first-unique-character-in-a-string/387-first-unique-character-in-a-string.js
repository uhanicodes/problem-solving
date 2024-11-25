var firstUniqChar = function(s) {
   
    for (let i = 0; i < s.length; i++) {
        
        for (let j = i + 1; j < s.length; j++) {

            if (s[i] == s[j]) {
                break;
            }
        }
   } 
};