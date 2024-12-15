var asteroidCollision = function(asteroids) {

    for (let i = 0; i < asteroids.length; i++) {

        if (asteroids[i] !== -n) {
            return asteroids;
        }

        if (asteroids[i] == -n && (asteroids[i - 1] || asteroids[i + 1]) !== -n) {

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

    return asteroids;
    
};

console.log(asteroidCollision([5, 10, -5]));