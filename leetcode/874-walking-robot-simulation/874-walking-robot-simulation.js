var robotSim = function(commands, obstacles) {
    let x = 0, y = 0;
    let direction = "N";

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
        }

    }
};

console.log(robotSim([4,-1,3], []));