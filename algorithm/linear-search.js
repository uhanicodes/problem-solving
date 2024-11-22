let linearSearch = (x, a) => {
    let i = 0;
    let location;
    
    while(i < a.length && x !== a[i]) {
        console.log('i:', i);
        i++;
    }

    if (i < a.length) {
        location = i;
    }
    else {
        location = -1;
        return location;
    }

    return location;
}

console.log(linearSearch(5, [1, 2, 3, 4, 5, 6, 7]));

console.log(linearSearch(1, [1, 2, 3, 4, 5, 6, 7]));

console.log(linearSearch(5, [5]));

console.log(linearSearch(8, [1, 2, 3, 4, 5, 6, 7]));