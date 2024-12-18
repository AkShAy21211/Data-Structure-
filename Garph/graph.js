class Graph{

    constructor(){
        this.adjencyList = {};
    }

    addVertex(vertex){

        if(!this.adjencyList[vertex]){

            this.adjencyList[vertex] = new Set();
        }

    }

    addEdge(v1,v2){

        if(!this.adjencyList[v1]){

            this.addVertex(v1);
        }
        
        if(!this.adjencyList[v2]){

            this.addVertex(v2);
        }

        this.adjencyList[v1].add(v2);
        this.adjencyList[v2].add(v1);
    }


    hasEdge(v1,v2){

        return this.adjencyList[v1].has(v2)&&this.adjencyList[v2].has(v1);
    }

    display(){

        for(const data in this.adjencyList){

            console.log(data +'->',[...this.adjencyList[data]]);
        }
    }

    removeEdge(v1,v2){

        this.adjencyList[v1].delete(v2);
        this.adjencyList[v2].delete(v1);
    }

    removeVertex(vertex){

        if(!this.adjencyList[vertex]){
            return;
        }

        for(const adjecentVertex in this.adjencyList){

            this.removeEdge(vertex,adjecentVertex)
        }

        delete this.adjencyList[vertex]
    }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B")
graph.addVertex("C");
graph.addEdge("A","B");
graph.addEdge("B","C");

graph.display();

