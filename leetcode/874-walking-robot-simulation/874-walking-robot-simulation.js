let hash = (x, y) => {
    return x + 60013 * y;
}

var robotSim = function(commands, obstacles) {
    let x = 0, y = 0;
    let direction = "N";
    let distance = 0;
    let max = 0;
    let obstaclesMap = new Map();
    // [[2, 4]]
    // [[1, 3], [3,6]]
    for (let i = 0; i < obstacles.length; i++) {
        obstaclesMap.set(hash(obstacles[i][0], obstacles[i][1]), true);
    }

    console.log(obstaclesMap);
    

    for (let i = 0; i < commands.length; i++) {

        if (commands[i] == -1) {
            if (direction == "N") {
                direction = "E";
            }
            else if (direction == "E") {
                direction = "S";
            }
            else if (direction == "S") {
                direction = "W";
            }
            else if (direction == "W") {
                direction = "N"
            }
        }
        else if (commands[i] == -2) {
            
            if (direction == "N") {
                direction = "W";
            }
            else if (direction == "W") {
                direction = "S";
            }
            else if (direction == "S") {
                direction = "E";
            }
            else if (direction == "E") {
                direction = "N";
            }
        }
        else if (commands[i] > 0) {
            
            for (let j = 1; j < (commands[i] + 1); j++) {
                // let isObstacle = false;
                
                if (direction == "N") {

                    // for (let k = 0; k < obstacles.length; k++) {
                        
                    //     if (x == obstacles[k][0] && (y + 1) == obstacles[k][1]) {
                    //         isObstacle = true;
                    //         break;
                    //     }
                    // }

                    // if (isObstacle == true) {
                    //     break;
                    // }
                    // else {
                    //     y++;
                    // }
                }
                else if (direction == "E") {
                    // for (let k = 0; k < obstacles.length; k++) {
                        
                    //     if ((x + 1) == obstacles[k][0] && y == obstacles[k][1]) {
                    //         isObstacle = true;
                    //         break;
                    //     }
                    // }

                    // if (isObstacle == true) {
                    //     break;
                    // }
                    // else {
                    //     x++;
                    // }
                }
                else if (direction == "S") {
                    for (let k = 0; k < obstacles.length; k++) {
                        
                        if (x == obstacles[k][0] && (y - 1) == obstacles[k][1]) {
                            isObstacle = true;
                            break
                        }
                    }

                    if (isObstacle == true) {
                        break;
                    }
                    else {
                        y--;
                    }   
                }
                else if (direction == "W") {
                    for (let k = 0; k < obstacles.length; k++) {
                        
                        if ((x - 1) == obstacles[k][0] && y == obstacles[k][1]) {
                            isObstacle = true;
                            break;
                        }
                    }

                    if (isObstacle == true) {
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
