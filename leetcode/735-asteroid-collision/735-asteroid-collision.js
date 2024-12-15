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

        for (let i = 0; i < asteroids.length; i++) {
            
            if (asteroids[i] >= 0 && asteroids[i + 1] < 0) {
                break;
            }
            else if (asteroids[i] < 0 && asteroids[i + 1] >= 0) {
                break;
            }
        }
    }

    return asteroids;
    
};

console.log(asteroidCollision([10, 2, -5]));