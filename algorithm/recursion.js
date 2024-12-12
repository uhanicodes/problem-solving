let fibonacci = (n) => {
    console.log(n);

    if (n == 0) {
        return 0;
    }

    if (n == 1) {
        return 1;
    }
    
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));

let factorial = (n) => {

    if (n == 0) {
        return 1;
    }
    
    return n * factorial(n - 1);
}

console.log(factorial(5));

for (let i = 0; i < 10; i++) {

    for (let j = 0; j < 10; j++) {
        
        for (let k = 0; k < 10; k++) {

            console.log(i, j, k);
        }
    }
}

let printAllNumbers = (n, p) => {
    console.log(n, p);

    if (n == 0) {
        //console.log(p);
        return;
    }

    for (let i = 0; i < 10; i++) {
        printAllNumbers(n - 1, p + i);
    }
}

// printAllNumbers(4, "");

let printAllStrings = (n, p) => {
    let s = ['A', 'B', 'X', 'Y'];
    
    if (n == 0) {
        console.log(p);
        return;
    }

    for (let i = 0; i < s.length; i++) {
        printAllStrings(n - 1, p + s[i]);
    }
}

printAllStrings(3, '');

mergeSort = (arr) => {

}

let sum = (n, arr) => {

    if (n == -1) {
        return 0;
    }
     
    return arr[n] + sum(n - 1, arr);
}

console.log(sum(2, [10, 15, 20]));

let combination = (n, p) => {
    let size = ["S", "M", "L", "XL"];
    let color = ["R", "G", "B"];

    if (n == 0) {
        return;
    }

    for (let i = 0; i < size.length; i++) {
        
        for (let j = 0; j < color.length; j++){
            combination(n - 1, p + color[j]);
        }
    }
}

console.log(combination(2, ''));

let reverseArray = (arr, n) => {
    console.log(n);

    if (n == 1) {
        return [arr[arr.length - n]];
    }

    let array = reverseArray(arr, n - 1);
    array.push(arr[arr.length - n]);
    
    return array;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));