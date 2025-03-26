const dx = [0, 1, -1, 0];
const dy = [1, 0, 0, -1];

class Queue2 {
    
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

var countServers = function(grid) {

    let visited = new Array(grid.length);

    for (let i = 0; i < grid.length; i++) {

        visited[i] = [];
     
        for (let j = 0; j < grid[i].length; j++) {
            visited[i].push(false);
        }
    }

    let totalServers = 0;
    
    for (let i = 0; i < grid.length; i++) {

        for (let j = 0; j < grid[i].length; j++) {

            if (grid[i][j] == 0) {
                continue;
            }
            
            if (visited[i][j] == true) {
                continue;
            }
            
            let queue = new Queue2();
            queue.enqueue({
                x: i,
                y: j
            })

            let servers = 0;

            while (!queue.isEmpty()) {

                let u = queue.dequeue();

                if (visited[u.x][u.y] == true) {
                    continue;
                }

                visited[u.x][u.y] = true;

                servers++;

                for (let k = 1; k < grid.length; k++) {
                    let newX = u.x + k;
                    let newY = u.y;

                    // if (newX == -1 || newY == -1 || newX == grid.length || newY == grid[i].length) {
                    //     // cell may go outside the max index
                    //     continue;
                    // }

                    // console.log("k:", k, newX, newY);

                    if (grid[newX][newY] == 1 && !visited[newX][newY]) {
                        queue.enqueue({
                            x: newX,
                            y: newY
                        })
                    }
                }

                for (let k = 0; k < grid[i].length; k++) {
                    let newX = u.x;
                    let newY = u.y + k;

                    // if (newX == -1 || newY == -1 || newX == grid.length || newY == grid[i].length) {
                    //     // cell may go outside the max index
                    //     continue;
                    // }

                    // console.log("k:", k, newX, newY);

                    if (grid[newX][newY] == 1 && !visited[newX][newY]) {
                        queue.enqueue({
                            x: newX,
                            y: newY
                        })
                    }
                }
            }
            if (servers > 1) {                
                totalServers += servers;
            }
        }
    }

    return totalServers;
};

console.log(countServers([[1,0],[0,1]]));

console.log(countServers([[1,0],[1,1]]));

console.log(countServers([[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]));

console.log(countServers([[1,0,0,1,0],[0,0,0,0,0],[0,0,0,1,0]]));