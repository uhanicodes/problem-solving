var asteroidCollision = function(asteroids) {

    while (true) {

        for (let i = 0; i < asteroids.length; i++) {

            if (asteroids[i] < 0 && (asteroids[i - 1] || asteroids[i + 1]) >= 0) {

                if(Math.abs(asteroids[i]) == Math.abs(asteroids[i + 1])) {
                    asteroids.splice(i, 1);
                    asteroids.splice(i + 1, 1);
                }

                if (Math.abs(asteroids[i]) == Math.abs(asteroids[i - 1])) {
                    asteroids.splice(i, 1);
                    asteroids.splice(i - 1, 1);
                }

                if(Math.abs(asteroids[i]) < Math.abs(asteroids[i + 1])) {
                    asteroids.splice(i, 1);
                }
                else {
                    asteroids.splice(i + 1, 1);
                }

                if(Math.abs(asteroids[i]) < Math.abs(asteroids[i - 1])) {
                    asteroids.splice(i, 1);
                }
                else {
                    asteroids.splice(i - 1, 1);
                }
            }
        }

        let sameSign = true;

        for (let i = 0; i < asteroids.length; i++) {
            
            if (asteroids[i] >= 0 && asteroids[i + 1] < 0) {
                sameSign = false;
            }
            else if (asteroids[i] < 0 && asteroids[i + 1] >= 0) {
                sameSign = false;
            }
        }

        if (sameSign == true) {
            return asteroids;
        }
        else {
            
        }
    }

    return asteroids;
    
};

console.log(asteroidCollision([-5, 2, 10]));