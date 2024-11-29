//go to each element of needle
//if each element of needle are found in haystack serially return the index of first occurance of first element
var strStr = function(haystack, needle) {
    
    for (let i = 0; i < haystack.length; i++) {

        for (let j = 0; j < needle.length; j++) {
            
            if (needle[j] == haystack[i]) {
                
            }
        }
    }
};

//haystack = "sadbutsad", needle = "sad"
//haystack = "leetcode", needle = "leeto"
//haystack = "leetcode", needle = "code"
