let constructAdjacencyList = (n, edges) => {
    let graph = new Array(n);

    for (let i = 0; i < graph.length; i++) {
        graph[i] = [];
    }

    for (let i = 0; i < edges.length; i++) {
        graph[edges[i][0]].push(edges[i][1]);
        graph[edges[i][1]].push(edges[i][0]); // for undirected graphs only
    }

    // console.log(graph);

    return graph;
};

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

let bfs = (n, edges) => {

    let graph = constructAdjacencyList(n, edges);

    console.log(graph);

    let visited = new Array(n);

    for (let i = 0; i < n; i++) {
        visited[i] = false;
    }

    let queue = new Queue();

    queue.enqueue(0);

    while (!queue.isEmpty()) {
        let u = queue.dequeue();

        if (visited[u] == false) {
            console.log(u);
            visited[u] = true;
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

bfs(6, [[0, 1], [0, 2], [0, 3], [1, 4], [2, 4], [2, 5], [2, 3]]);