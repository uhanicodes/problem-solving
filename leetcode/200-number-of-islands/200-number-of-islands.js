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

let bfs = (grid) => {

    let visited = new Array(grid.length);

    for (let i = 0; i < grid.length; i++) {
     
        for (let j = 0; j < grid[i].length; j++) {
            visited[i][j] = false;
        }
    }

    // let paths = [];
    let island = 0
    
    for (let i = 0; i < grid.length; i++) {

        for (let j = 0; j < grid[i].length; j++) {
            
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

                if (visited[u] == false) {
                    visited[u] = true;
                    path.push(u);
                }

                let adj = graph[u];

                for (let i = 0; i < adj.length; i++) {
                    let v = adj[i];

                    if (!visited[v]) {
                        queue.enqueue(v);
                    }
                }
            }
        }
        
        paths.push(path);
    }

    return paths;
}