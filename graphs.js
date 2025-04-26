class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.adjList = new Map();
  }

  addVertex(v) {
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  printGraph() {
    let vertices = this.adjList.keys();

    for(let v of vertices) {
      let val = this.adjList.get(v);
      let res = "";
      for(let c of val) {
        res += c + " ";
      }
      console.log(v + " -> " + res);
    }
  }
}

const g = new Graph(6); 
let vertices =  [ 'A', 'B', 'C', 'D', 'E', 'F' ];

for(let i of vertices) {
  g.addVertex(i);
}

g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

g.printGraph();