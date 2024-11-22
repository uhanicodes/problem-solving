let binarySearch = (x, arr) => {
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        let m = Math.floor((i + j)/2);

        if (x > arr[m]) {
            i = m + 1;
        }
        else {
            j = m;
        } 
        
        console.log(i, j);
    }

    console.log(i);
    
    let location = 0;

    if (x == arr[i]) {
        location = i;
    }
    else {
        location = -1;
    }

    return location;
}

// console.log(binarySearch(5, [1, 2, 3, 4, 5, 6, 7]));

// console.log(binarySearch(1, [1, 2, 3, 4, 5, 6, 7]));

// console.log(binarySearch(5, [5]));

console.log(binarySearch(0, [1, 2, 3, 4, 5, 6, 7]));