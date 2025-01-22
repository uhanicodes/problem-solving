// Input: s = "tree"
// Output: "eert"

// Input: s = "cccaaa"
// Output: "aaaccc"

// Input: s = "Aabb"
// Output: "bbAa"

var frequencySort = function(s) {
    let charCount = new Map();
    
    for (let i = 0; i < s.length; i++) {
    
        if (charCount.has(s[i])) {
            charCount.set(s[i], charCount.get(s[i]) + 1)
        }
        else {
            charCount.set(s[i], 1);
        }
    }

    let arr = Array.from(charCount);

    arr.sort((a, b) => b[1] - a[1]);

    let sortedString = "";

    for (let i = 0; i < arr.length; i++) {
        
        for (let j = 0; j < arr[i][1]; j++) {
            sortedString += arr[i][0];

        }
    }
    
    return sortedString;
};

console.log(frequencySort('aaacccc'));
console.log(frequencySort('tree'));
console.log(frequencySort('Aabb'));

// const arr = [10, 4, 8, 3, 9, 7, 1];
// arr.sort((a, b) => a - b);

// console.log(arr);