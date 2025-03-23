const dx = [0, 1, -1, 0];
const dy = [1, 0, 0, -1];

class Stack {

    constructor() {
        this.items = [];
    }

    push(number) {
        this.items.push(number);
    }

    pop() {
        
        if (this.items === 0)
            return 'The stack is empty!'
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
};

var closedIsland = function(grid) {
    let visited = new Array(grid.length);

    for (let i = 0; i < grid.length; i++) {
        visited[i] = [];

        for (let j = 0; j < visited[i].length; j++) {
            visited[i].push(false);
        }
    }

    let numberOfClosedIslands = 0;

    for (let i = 0; i < grid.length; i++) {

        for (let j = 0; j < grid[i].length; j++) {
            
            if (grid[i][j] == 1) {
                continue;
            }

            if (visited[i][j] == true) {
                continue;
            }

            let stack = new Stack();
            stack.push({
                x : i,
                y : j
            }); // source node

            let closed = true;

            while(!stack.isEmpty()) {
                let u = stack.pop();

                if (visited[u.x][u.y] == true) {
                    continue;
                }

                visited[u.x][u.y] = true;

                if (u.x == 0 || u.x == grid.length - 1 || u.y == 0 || u.y == grid[i].length - 1) {
                    closed = false;
                }

                // forget about the last loop
                // goal: here the adjacent cells of a cell must be traversed.
                // implement.
                for (let k = 0; k < 4; k++) {
                    let newX = u.x + dx[k]; // read this line. try to understand its meaning
                    let newY = u.y + dy[k]; // dx and dy are arrays. have to go to kth element of the arrays.

                    if (newX == -1 || newX == grid.length || newY == -1 || newY == grid[i].length) {
                        continue;
                    }

                    if (grid[newX][newY] == 0 && !visited[newX][newY]) {
                        stack.push({
                            x : newX,
                            y : newY
                        })
                    }
                }
            }

            if (closed == true) {
                numberOfClosedIslands++;
            }
        }
    }

    return numberOfClosedIslands;
}

console.log(closedIsland([[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]));

console.log(closedIsland([[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]));

console.log(closedIsland([[1,1,1,1,1,1,1],
               [1,0,0,0,0,0,1],
               [1,0,1,1,1,0,1],
               [1,0,1,0,1,0,1],
               [1,0,1,1,1,0,1],
               [1,0,0,0,0,0,1],
               [1,1,1,1,1,1,1]]));