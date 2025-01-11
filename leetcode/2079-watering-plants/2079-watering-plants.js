var wateringPlants = function(plants, capacity) {
    let steps = 0;

    for (let i = 0; i < plants.length; i++) {
        capacity -= plants[i];
        steps += i + 1;

        if (capacity < plants[i]) {
            capacity += plants[i]; //go to initial capacity;
            steps += i + 1;
        }
    }

    return steps;
};

console.log(wateringPlants([2,2,3,3], 5));