//
//Edge list - The connections between the vertex(Nodes) in a graph
//
//Adjacent list - Indicate the nodes which are connected to the given node
//
//Adjacent matrix - A matrix of zeros and ones showing which nodes are connected to the current node
//whereby zero demacates no connection and one shows a connecion
//
//Custom graph
class graph {
  constructor() {
    //
    //TO tell us the number of nodes in the graph
    this.no_of_nodes = 0;
    //
    //This is a representation of the graph using an adjacent list
    this.adjacent_list = {};
  }
  //
  //Add a node to the adjacent_list and increment the  number of nodes in the graph
  add_vertex(node) {
    //
    //Add a node to the adjacent list
    this.adjacent_list[node] = [];
    //
    //Increment the number of nodes in the graph
    this.no_of_nodes++;
  }
  //
  //Connect up two nodes by inserting the both nodes on the adjusent node list
  //Ensure that both of the nodes exist before linking them up
  add_edge(node1, node2) {
    //
    //Get all the nodes in the adjacent list
    const nodes = Object.keys(this.adjacent_list);
    //
    //If ether of the two nodes do not exist do nothing
    if (nodes.includes(node1) && nodes.includes(node2)) {
      //
      //Since it is a undirected graph ensure that both nodes have links to each other
      this.adjacent_list[node1].push(node2);
      this.adjacent_list[node2].push(node1);
    }
  }
  //
  //Show the various nodes and which nodes they are connected to
  show_connections() {
    //
    //Go through all the keys in the adjacent list and for each key produce all the nodes that
    //are conneted to the particular node
    //
    //Log all the nodes connected to the node
    for (const node of Object.keys(this.adjacent_list))
      console.log(`${node} --> ${this.adjacent_list[node].join(" ")}`);
  }
}
//
//Test the custom graph
//
//Create an instance of the custom graph
const mygraph = new graph();
//
//Add the vertex/nodes to the graph
mygraph.add_vertex("0");
mygraph.add_vertex("1");
mygraph.add_vertex("2");
mygraph.add_vertex("3");
mygraph.add_vertex("4");
mygraph.add_vertex("5");
mygraph.add_vertex("6");
//
//Connect the various nodes in the graph
mygraph.add_edge("3", "1");
mygraph.add_edge("3", "4");
mygraph.add_edge("4", "2");
mygraph.add_edge("4", "5");
mygraph.add_edge("1", "2");
mygraph.add_edge("1", "0");
mygraph.add_edge("0", "2");
mygraph.add_edge("6", "5");
//
//Show how the various nodes are connected
mygraph.show_connections();
//
//The expected answer
//0 --> 1 2
//1 -->3 2 0
//2 --> 4 1 0
//3 --> 1 4
//4 --> 3 2 5
//5 --> 4 6
//6 --> 5
