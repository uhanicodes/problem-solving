class Queue {
    
    constructor () {
        this.array = [];
        this.start = this.end = -1;
    }

    enqueue(v) {

        if (this.start == -1 && this.end == -1) {
            this.start = 0;
        }

        this.end++;
        this.array[this.end] = v;
    }

    dequeue() {
        let firstValue = 0;

        if (this.start !== -1 && this.end !== -1) {
            firstValue = this.array[this.start];
            this.start++;
        }

        if (this.start - 1 == this.end) {
            this.start = -1;
            this.end = -1;
        }

        return firstValue;
    }

    isEmpty() {
        
        if (this.start == -1 && this.end == -1) {
            return true;
        }
        else {
            return false;
        }
    }
}

var numIslands = function(grid) {

    let visited = new Array(grid.length);

    for (let i = 0; i < grid.length; i++) {

        visited[i] = [];
     
        for (let j = 0; j < grid[i].length; j++) {
            visited[i].push(false);
        }
    }

    // let paths = [];
    let island = 0
    
    for (let i = 0; i < grid.length; i++) {

        for (let j = 0; j < grid[i].length; j++) {

            if (grid[i][j] == "0") {
                continue;
            }
            
            if (visited[i][j] == true) {
                continue;
            }
            
            island++;
            
            let queue = new Queue();
            queue.enqueue({
                x: i,
                y: j
            })
        
            // let path = [];

            while (!queue.isEmpty()) {
                let u = queue.dequeue();

                if (visited[u.x][u.y] == false) {
                    visited[u.x][u.y] = true;
                }

                let dx = [0, 1, -1, 0];
                let dy = [1, 0, 0, -1];

                for (let k = 0; k < 4; k++) {
                    let newX = u.x + dx[k];
                    let newY = u.y + dy[k];

                    if (newX == -1 || newY == -1 || newX == grid.length || newY == grid[i].length) {
                        // cell may go outside the max index
                        continue;
                    }

                    // console.log(newX, newY);

                    if (grid[newX][newY] == "1" && !visited[newX][newY]) {
                        queue.enqueue({
                            x: newX,
                            y: newY
                        })
                    }
                }
            }
        }
        
    }

    return island;
}

console.log(numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]));

console.log(numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]));