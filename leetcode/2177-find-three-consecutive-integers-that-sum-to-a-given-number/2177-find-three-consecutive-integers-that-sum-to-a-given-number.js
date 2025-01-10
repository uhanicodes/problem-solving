var sumOfThree = function(num) {
    let consecutiveNumbers = [];
    
    if (num % 3 == 0) {
        let x = (num / 3);
        consecutiveNumbers.push(x - 1, x, x + 1);
    }
    else {
        return [];
    }

    return consecutiveNumbers;
};

console.log(sumOfThree(33));

console.log(sumOfThree(4));