
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
        }
    }

    bfsTraversal(start) {
        let visited = new Set();
        visited.add(start);
        let queue = [start];
        while (queue.length > 0) {
            let vertex = queue.shift();
            let adjacencyVetices = this.adjacencyList[vertex];
            console.log(vertex);
            for (const adj of adjacencyVetices) {
                if (!visited.has(adj)) {
                    visited.add(adj);
                    queue.push(adj);
                }
            }
        }
    }
}

let graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");

graph.bfsTraversal("C");

