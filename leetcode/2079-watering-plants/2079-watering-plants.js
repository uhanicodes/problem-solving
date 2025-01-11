var wateringPlants = function(plants, capacity) {
    let steps = 0;

    for (let i = 0; i < plants.length; i++) {
        capacity -= plants[i];
        steps += i + 1;

        if (capacity < plants[i]) {

            for (let j = 0; j < i + 1; j++) {
                capacity += plants[j]; //go to initial capacity;
            }
            
            steps += i + 1;
            console.log(steps, capacity);
        }
    }

    return steps;
};

console.log(wateringPlants([2,2,3,3], 5));

// console.log(wateringPlants([1,1,1,4,2,3], 4));

// console.log(wateringPlants([7,7,7,7,7,7,7], 8));