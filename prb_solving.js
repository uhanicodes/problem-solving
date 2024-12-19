let findSecondLargestElement = (arr) => {
    let largest = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > arr[i+1]) {
            largest = arr[i];

            if(arr[i] !== largest, arr[i] > arr[i+1]) {
                console.log(arr[i]);
            }
            else if (arr[i] !== largest, arr[i] == arr[i+1], arr[i+2] > arr[i+1]) {
                console.log(arr[i+2]);
            }
            else {
                console.log(-1);
            }
        }
        //console.log(arr);
    }
}

findSecondLargestElement([17, 12, 34, 45, 90]);

function Student (name, roll) {
    this.name = name;
    this.roll = roll;
}

console.log(new Student("Abid", 1));

console.log(new Student("Faria", 2));

let fruits = new Map ([
    ["Banana", 100], 
    ["Apple", 200],
]);

fruits.set("Orange", 180);

console.log(fruits.get("Orange"));

fruits.set("Orange", 500);

console.log(fruits.get("Banana"));

console.log(fruits.get("Orange"));

fruits.set("Banana", 400);

console.log(fruits.get("Banana"));

console.log(fruits.get("Banana") + 10);

fruits.set("Banana", fruits.get("Banana") + 10);

console.log(fruits.get("Banana"));

let students = new Map();

console.log(students.get("Abid"));

let text = '';

for (const x of fruits.entries()) {
    text += x;
}

console.log(text);

obstacles = [[0, 1], [2, 4], [3,5]];

console.log (obstacles[1][1]);

console.log (obstacles[1]);