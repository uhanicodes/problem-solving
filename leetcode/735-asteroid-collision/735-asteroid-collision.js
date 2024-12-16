var asteroidCollision = function(asteroids) {

    while (true) {

        for (let i = 0; i < asteroids.length - 1; i++) {

            if (asteroids[i] >= 0 &&  asteroids[i + 1] < 0) {

                if(Math.abs(asteroids[i]) == Math.abs(asteroids[i + 1])) {
                    asteroids.splice(i, 2);
                }
                else if(Math.abs(asteroids[i]) < Math.abs(asteroids[i + 1])) {
                    asteroids.splice(i, 1);
                }
                else {
                    asteroids.splice(i + 1, 1);
                }
            }
        }

        //console.log(asteroids);

        //chek if all negative elements are on left and all positive element are on right.
        //[-2, -1, 1, 2]
        //[1, 2, 3]
        //[-1, -2, -3]
        let indexFirstPositive = -1;

        for (let i = 0; i < asteroids.length; i++) {

            if (asteroids[i] >= 0) {
                indexFirstPositive = i;
                break;
            }
        }

        if (indexFirstPositive >= 0) {
            let positive = true;

            for (let i = indexFirstPositive + 1; i < asteroids.length; i++) {

                if (asteroids[i] < 0) {
                    positive = false;
                    break;
                }
            }

            if (positive == true) {
                return asteroids;
            }
        }

        if (indexFirstPositive == -1) {
            return asteroids;
        }
    }

    return asteroids;
    
};

//console.log(asteroidCollision([-5, 2, 10]));
console.log(asteroidCollision([1,-1,-2,-2]));