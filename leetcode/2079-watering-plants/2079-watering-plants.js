var wateringPlants = function(plants, capacity) {
    let steps = 0;
    let amount = capacity;

    for (let i = 0; i < plants.length; i++) {
        
        if (amount >= plants[i]) {
            amount -= plants[i];
            steps++;
        }
        else {
            amount = capacity;
            amount -= plants[i];
            steps += 2 * i + 1;
        }
    }

    return steps;
};

console.log(wateringPlants([2,2,3,3], 5));

console.log(wateringPlants([1,1,1,4,2,3], 4));

console.log(wateringPlants([7,7,7,7,7,7,7], 8));