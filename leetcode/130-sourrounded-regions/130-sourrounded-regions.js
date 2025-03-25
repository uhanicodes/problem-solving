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

var solve = function(board) {

    let visited = new Array(board.length);

    for (let i = 0; i < board.length; i++) {

        visited[i] = [];
     
        for (let j = 0; j < board[i].length; j++) {
            visited[i].push(false);
        }
    }

    for (let i = 0; i < board.length; i++) {

        for (let j = 0; j < board[i].length; j++) {

            if (board[i][j] == "X") {
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

            let closed = true;
            let nodes = [];
        
            // let path = [];
            while (!queue.isEmpty()) {

                let u = queue.dequeue();

                if (visited[u.x][u.y] == true) {
                    continue;
                }

                visited[u.x][u.y] = true;
                nodes.push({
                    x : u.x,
                    y : u.y
                });

                if (u.x == 0 || u.x == board.length - 1 || u.y == 0 || u.y == board[i].length - 1) {
                    closed = false;
                }

                // console.log("u:", u);

                for (let k = 0; k < 4; k++) {
                    let newX = u.x + dx[k];
                    let newY = u.y + dy[k];

                    if (newX == -1 || newY == -1 || newX == board.length || newY == board[i].length) {
                        // cell may go outside the max index
                        continue;
                    }

                    // console.log("k:", k, newX, newY);

                    if (board[newX][newY] == "O" && !visited[newX][newY]) {
                        queue.enqueue({
                            x: newX,
                            y: newY
                        })
                    }
                }
            }

            if (closed == true) {
                
                for (let k = 0; k < nodes.length; k++) {
                    board[nodes[k].x][nodes[k].y] = "X";
                }
            }
        }
    }
};

// console.log(solve([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]));

// console.log(solve(["X"]));

console.log(solve([["O","O","O"],["O","O","O"],["O","O","O"]]));