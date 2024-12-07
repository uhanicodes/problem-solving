var fizzBuzz = function(n) {
    let arr = [];

    for(let i = n - 1; i > -1; i--) {
        arr[i] = n.toString();
        n--;

        if (arr[i] % 3 == 0 && arr[i] % 5 == 0) {
            arr[i] = "FizzBuzz";
        }
        if (arr[i] % 3 == 0) {
            arr[i] = "Fizz";
        }
        if (arr[i] % 5 == 0) {
            arr[i] = "Buzz";
        }
    }

    return arr;
};

console.log(fizzBuzz(5));