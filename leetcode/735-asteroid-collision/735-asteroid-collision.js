var asteroidCollision = function(asteroids) {

    while (true) {

        for (let i = 0; i < asteroids.length - 1; i++) {

            if (asteroids[i] >= 0 &&  asteroids[i + 1] < 0) {

                if(Math.abs(asteroids[i]) == Math.abs(asteroids[i + 1])) {
                    asteroids.splice(i, 2);
                }

                if(Math.abs(asteroids[i]) < Math.abs(asteroids[i + 1])) {
                    asteroids.splice(i, 1);
                }
                else {
                    asteroids.splice(i + 1, 1);
                }
            }
        }

        console.log(asteroids);

        let sameSign = true;

        for (let i = 0; i < asteroids.length - 1; i++) {

            
            if (asteroids[i] >= 0 && asteroids[i + 1] < 0) {
                sameSign = false;
                break;
            }
            else if (asteroids[i] < 0 && asteroids[i + 1] >= 0) {
                sameSign = false;
                break;
            }
        }

        if (sameSign == true) {
            return asteroids;
        }
    }

    return asteroids;
    
};

console.log(asteroidCollision([-2, -1, 1, 2]));