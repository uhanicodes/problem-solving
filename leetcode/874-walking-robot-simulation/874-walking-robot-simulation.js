var robotSim = function(commands, obstacles) {
  
    let (x, y) = (0, 0);

    for (let i = 0; i < commands.length; i++) {

        if (commands[i] == -1) {
            // turn 90 degrees right.
        }
        else if (commands[i] == -2) {
            // turn 90 degrees left.
        }
        else if (commands[i] > 0) {
            // move forward commands[i] times from the current position, once at a time.
        }

    }
};