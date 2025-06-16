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

  bfs(source) {
    var vis = [];
    var q = [];

    vis[source] = true;
    q.push(source); 

    while(q.length > 0) {
      var node = q.shift(); 
      console.log(node);

      var list = this.adjList.get(node);

      for(let i in list) {
        var neighbour = list[i];

        if(!vis[neighbour]) {
          vis[neighbour] = true;
          q.push(neighbour);
        }
      }
    }
  }


  dfs(source) {
    const vis = new Set();
    this.helper(source, vis);
  }

  helper(node, vis) {
    vis.add(node);
    console.log(node);

    const neighbour = this.adjList.get(node) || []; 

    for(let ele of neighbour) {
      if(!vis.has(ele)) this.helper(ele, vis); 
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

// g.printGraph();
// g.bfs('A');
g.dfs('A');