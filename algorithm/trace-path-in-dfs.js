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
}

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

let dfs = (n, edges) => {

    let graph = constructAdjacencyList(n, edges);
    let visited = new Array(n);
    let path = [];

    for (let i = 0; i < n; i++) {
        visited[i] = false;
    }

    let stack = new Stack();
    stack.push(0); // source node

    while(!stack.isEmpty()) {
        let u = stack.pop();

        if (visited[u] == false) {
            // console.log(u);
            visited[u] = true;
            path.push(u);
        }

        let adj = graph[u];

        for (let i = 0; i < adj.length; i++) {
            let v = adj[i];

            if (!visited[v]) {
                stack.push(v);
            }
        }
    }
    return path;
}

// console.log(dfs(5, [[0, 1], [0, 2], [1, 2], [2, 3], [2, 4], [3, 4]]));
console.log(dfs(6, [[0, 1], [0, 2], [0, 3], [1, 4], [2, 4], [2, 5], [2, 3]]));