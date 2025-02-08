var largestNumber = function(nums) {
    nums.sort((a, b) => b - a);
    return nums;
};

let numString = (n) => {
    let remain = '';

    while (n !== 0) {
        remain = remain + (n % 10);
        n = Math.floor(n / 10);
    }

    return remain;
}

console.log(numString(12345));

console.log(largestNumber([3,30,34,5,9]));

// let arr = ["hello", "blo", "bio", "flow"];

// arr.sort((a, b) => {
//     // if the strings have different lengths
//     if (a.length > b.length) {
//         return -1;
//     }

//     if (a.length < b.length) {
//         return 1;
//     }

//     // if the strings have the same length
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] > b[i]) {
//             return 1;
//         }

//         if (a[i] < b[i]) {
//             return -1;
//         }
//     }

//     return 0;
// });

// console.log(arr);

arr = ["ab", "b", "kab", "pac", "rat", "pit"];

arr.sort((a,b) => {

    if (a[0] == 'p' && b[0] !== 'p') {
        return -1;
    }

    if (a[0] !== 'p' && b[0] == 'p') {
        return 1;
    }

    if ((a[0] == 'p' && b[0] == 'p') || (a[0] !== 'p' && b[0] !== 'p')) {
        return 0;
    }
    return 0;
});

console.log(arr);

let nums = [12, 15, 18, 19, 31, 44];

nums.sort((a, b) => {

    if ((a % 2 == 0 && b % 2 == 0) || (a % 2 == 1 && b % 2 == 1)) {

        if (a > b) {
            return 1;
        }

        if(a < b) {
            return -1;
        }
    }

    if (a % 2 == 0 && b % 2 == 1) {
        return -1;
    }

    if (a % 2 == 1 && b % 2 == 0) {
        return 1;
    }

    return 0;
});

console.log(nums);

let students = [];

students.sort((a, b) => {

    if (a.class > b.class) {
        return -1;
    }

    if (a.class < b.class) {
        return 1;
    }

    if ((a.class == b.class) && (a.roll > b.roll)) {
        return 1;
    }

    if (((a.class == b.class) && (a.roll < b.roll))) {
        return -1;
    }
});