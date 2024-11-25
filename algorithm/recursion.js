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
    
    if (n == 0) {
        console.log(p);
        return;
    }

    for (let i = 0; i < 10; i++) {
        printAllNumbers(n - 1, p + i);
    }
}

printAllNumbers(4, "");