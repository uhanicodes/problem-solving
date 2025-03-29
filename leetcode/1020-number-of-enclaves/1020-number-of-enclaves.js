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

var numEnclaves = function(grid) {

    let visited = new Array(grid.length);

    for (let i = 0; i < grid.length; i++) {

        visited[i] = [];
     
        for (let j = 0; j < grid[i].length; j++) {
            visited[i].push(false);
        }
    }

    let totalEnclaves = 0;
    
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

            let enclave = true;
            let enclaves = [];
        
            // let path = [];
            while (!queue.isEmpty()) {

                let u = queue.dequeue();

                if (visited[u.x][u.y] == true) {
                    continue;
                }

                visited[u.x][u.y] = true;
                enclaves.push(grid[u.x][u.y]);

                if (u.x == 0 || u.x == grid.length - 1 || u.y == 0 || u.y == grid[i].length - 1) {
                    enclave = false;
                }

                

                // console.log("u:", u);

                for (let k = 0; k < 4; k++) {
                    let newX = u.x + dx[k];
                    let newY = u.y + dy[k];

                    if (newX == -1 || newY == -1 || newX == grid.length || newY == grid[i].length) {
                        // cell may go outside the max index
                        continue;
                    }

                    // console.log("k:", k, newX, newY);

                    if (grid[newX][newY] == 1 && !visited[newX][newY]) {
                        queue.enqueue({
                            x: newX,
                            y: newY
                        })
                    }
                }
            }

            if (enclave == true) {

                for (let k = 0; k < enclaves.length; k++) {
                    totalEnclaves += enclaves[k];
                }
            }
        }
    }

    return totalEnclaves; 
};


console.log(numEnclaves([[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]));

console.log(numEnclaves([[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]));