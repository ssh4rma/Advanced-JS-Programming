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
        res += j + " ";
      }
      console.log(i + " -> " + res);
    }
  }
}

