var largestNumber = function(nums) {
    let numStrings = [];

    for (let i = 0; i < nums.length; i++) {
        y = nums[i].toString();
        numStrings.push(y);
    }

    let largestNumberString = '';

    for (let i = 0; i < numStrings.length; i++) {

        
    }
    return numStrings;
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

console.log(largestNumber([23, 12]));