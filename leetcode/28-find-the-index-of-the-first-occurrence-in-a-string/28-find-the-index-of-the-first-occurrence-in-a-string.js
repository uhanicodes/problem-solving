//go to each element of needle
//if each element of needle are found in haystack serially return the index of first occurance of first element
//|l|e|e|t|c|o|d|e
//|-|-|-|-|-|-|-|-
//|0|1|2|3|4|5|6|7

// |c|o|d|e
// |-|-|-|-
// |0|1|2|3--j
// |2|3|4|5--i 

var strStr = function(haystack, needle) {
    
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        let match = true;

        for (let j = 0; j < needle.length; j++) {
            
            if (needle[j] !== haystack[j + i]) {
                match = false;
                break;
            }
        }

        if (match == true) {
            return i;
        }
    }

    return -1;
};

// haystack = "sadbutsad", needle = "sad"
// haystack = "leetcode", needle = "leeto"
// haystack = "leetcode", needle = "code"
console.log(strStr('sadbutsad', 'sad'));
console.log(strStr('leetcode', 'leeto'));
console.log(strStr('l','c'));

let arr = [1, 2, 3, 4, 5, 6];
let s = 2;
let len = 3;

// 0, 1, 2, 3, 4,...len - 1
// s, s + 1, s + 2,...,s + len - 1 

for (let i = s; i < s + len; i++) {
    console.log("num:" ,arr[i]);
}