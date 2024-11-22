let bubbleSort = (arr) => {

    for (let i = 0; i < arr.length-1; i++) {

        for (let j = 0; j < arr.length-i-1; j++) {

            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

// i = 0, n - 2; n - 0 - 2
// i = 1, n - 3;
// i = 2, n - 4;
// i = 3, n - 5;

//

console.log(bubbleSort([3, 2, 4, 1, 5]));