let arr = ["hello", "blo", "bio", "flow"];

arr.sort((a, b) => {
    // if the strings have different lengths
    if (a.length > b.length) {
        return -1;
    }

    if (a.length < b.length) {
        return 1;
    }

    // if the strings have the same length
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            return 1;
        }

        if (a[i] < b[i]) {
            return -1;
        }
    }

    return 0;
});

console.log(arr);

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

let students = [{
  "name": "Abid Hasan",
  "class": "2",
  "roll": "12"
}, 
{
  "name": "Jaid Hasan",
  "class": "5",
  "roll": "12"
},
{
  "name": "Shahjahan",
  "class": "2",
  "roll": "10"
},
{
  "name": "Abid Hasan",
  "class": "5",
  "roll": "9"
}];

students.sort((a, b) => {

    if (a.class > b.class) {
        return -1;
    }

    if (a.class < b.class) {
        return 1;
    }

    if ((a.class == b.class) && (a.roll > b.roll)) {
        return -1;
    }

    if (((a.class == b.class) && (a.roll < b.roll))) {
        return 1;
    }

    return 0;
});

console.log(students);

let carCount = (car) => {
    let carCounts = new Map();

    for (let i = 0; i < car.length; i++) {

        if (car[i] == ' ') {
            continue;
        }

        if (!carCounts.has(car[i])) {
            carCounts.set(car[i], 1);
        }
        else {
            carCounts.set(car[i], carCounts.get(car[i]) + 1)
        }
    }

    return carCounts;
}

console.log(carCount("race a car"));

let reverseString = (s) => {
    console.log(Math.floor(s.length / 2));

    for (let i = 0; i < (s.length / 2); i++) {
        let temp = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = temp;
        console.log(i, (s.length - 1 - i));
    }

    return s;
}

console.log(reverseString([1, 2, 3, 4]));

let a = 10, b = 34;
let c = a;
a = b;
b = c;


console.log(a, b);

reverseInt = (int) => {
    let reveInt = [];

    while (Math.floor(int / 10) !== 0) {
        reveInt.push(int % 10);
        int = Math.floor(int / 10);
        
        for (let i = 1; i < 10; i++) {

            if (int == i) {
                reveInt.push(int);
            }
        }
    }

    let reveNum = 0;
    
    for (let i = 0; i < reveInt.length; i++) {
        reveNum += ((reveInt[i]) * (10^(reveInt.length - 1 - i)));
    }

    return reveNum;
}

console.log(reverseInt(2354));