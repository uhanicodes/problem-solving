var robotSim = function(commands, obstacles) {
    let x = 0, y = 0;
    let direction = "N";
    let distance = 0;

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
            
            for (let j = 1; j < commands[i] + 1; j++) {
                let isObstacle = false;

                for (let k = 0; k < obstacles.length; k++) {
                    
                    if ((x + 1) == obstacles[k][0] && (y + 1) == obstacles[k][1]) {
                        isObstacle = true;
                    }
                }

                if (direction == "N") {

                    if (isObstacle == true) {
                        break;
                    }
                    else {
                        y++;
                    }
                }
                else if (direction == "E") {

                    if (isObstacle == true) {
                        break;
                    }
                    else {
                        x++;
                    }
                }
                else if (direction == "S") {

                    if (isObstacle == true) {
                        break;
                    }
                    else {
                        y--;
                    }
                }
                else if (direction == "W") {

                    if (isObstacle == true) {
                        break;
                    }
                    else {
                        x--;
                    }
                }
            }
            
            console.log(x, y);
        }

    }
    
    distance = (x * x) + (y * y);
    return distance;
};

console.log(robotSim([4,-1,4,-2,4], [2, 4]));