var robotSim = function(commands, obstacles) {
    let x = 0, y = 0;
    let direction = "N";

    for (let i = 0; i < commands.length; i++) {

        if (commands[i] == -1) {
            // turn 90 degrees right.
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
            // turn 90 degrees left.
            direction = "W";
        }
        else if (commands[i] > 0) {
            // move forward commands[i] times from the current position, once at a time.
        }

    }
};

console.log(robotSim([4,-1,3], []));