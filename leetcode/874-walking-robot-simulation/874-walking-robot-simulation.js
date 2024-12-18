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
            // move forward commands[i] times from the current position, once at a time.
            for (let j = 1; j < commands[i] + 1; j++) {
                    
                if (direction == "N") {
                    y++;
                }
                else if (direction == "E") {
                    x++;
                }
                else if (direction == "S") {
                    y--;   
                }
                else if (direction == "W") {
                    x--;
                }

                if (x == obstacles[0] && y == obstacles[1]) {
                    break;
                }
            }
            
            console.log(x, y);
        }

    }
    
    distance = (x * x) + (y * y);
    return distance;
};

console.log(robotSim([4,-1,4,-2,4], []));