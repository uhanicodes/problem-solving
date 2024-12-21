let hash = (x, y) => {
    return x + 60013 * y;
}

var robotSim = function(commands, obstacles) {
    let x = 0, y = 0;
    let direction = "N";
    let distance = 0;
    let max = 0;
    let rightTurn = new Map([["N", "E"], ["E", "S"], ["S", "W"], ["W", "N"]]);
    let leftTurn = new Map([["N", "W"], ["W", "S"], ["S", "E"], ["E", "N"]]);
    let obstaclesMap = new Map();
    
    for (let i = 0; i < obstacles.length; i++) {
        obstaclesMap.set(hash(obstacles[i][0], obstacles[i][1]), true);
    }
    
    for (let i = 0; i < commands.length; i++) {

        if (commands[i] == -1) {
            direction = rightTurn.get(direction);
        }
        else if (commands[i] == -2) {
            direction = leftTurn.get(direction);
            
        }
        else if (commands[i] > 0) {
            
            for (let j = 1; j < (commands[i] + 1); j++) {
                
                if (direction == "N") {

                    if (obstaclesMap.has(hash(x, y + 1)) == true) {
                        break;
                    }
                    else {
                        y++;
                    }
                }
                else if (direction == "E") {

                    if (obstaclesMap.has(hash(x + 1, y)) == true) {
                        break;
                    }
                    else {
                        x++;
                    }
                }
                else if (direction == "S") {

                    if (obstaclesMap.has(hash(x, y - 1)) == true) {
                        break;
                    }
                    else {
                        y--;
                    }
                }
                else if (direction == "W") {

                    if (obstaclesMap.has(hash(x - 1, y)) == true) {
                        break;
                    }
                    else {
                        x--;
                    }
                }
            }
            
            distance = (x * x) + (y * y);
            max = Math.max(max, distance);
        }
    }
    
    return max;
};

console.log(robotSim([4, -1, 4, -2, 4], [[2, 4]]));
