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