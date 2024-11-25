let insertionSort = (arr) => {

    for (let j = 1; j < arr.length; j++) {
        
        let i = 0;

        while (arr[j] > arr[i]) {
            i++;            
        }

        let m = arr[j];

        for (let k = 0; k < j - i; k++) {
            arr[j - k] = arr[j - k - 1];
        }

        arr[i] = m;
    }

    return arr;
}

// j - 1 - i + 1

console.log(insertionSort([3, 2, 4, 1, 5]))