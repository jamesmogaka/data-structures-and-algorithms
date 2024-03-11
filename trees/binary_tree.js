//
//This is a blueprint of a node in a binary tree
//A node in a binary tree has 0, 1 or 2 child nodes
class Node {
  //
  constructor(value) {
    //
    //Pointers to child nodes when creating a node it has 0 child nodes
    //
    //Right
    this.right = null;
    //
    //Left
    this.left = null;
    //
    //Store the value
    this.value = value;
  }
}
//
//The custom binary search tree
class BinarySearchTree {
  constructor() {
    //
    //Keep track of the root node
    this.root = null;
  }
  //
  //Given a value create a node and add it to the binary search tree at its position
  //Consider the rules of a binary search tree when implementing:-
  //1.Each node can have a maximum of 2 child nodes only
  //2.For each node The left child is less than the node and the right child
  //is greater than the node
  insert(value) {}
  //
  //
  lookup(value) {}
  //
  //
  remove(value) {}
}

//
//Create an instance of the binary search tree
const tree = new BinarySearchTree();
//
//Insert values to the binary tree
tree.insert(9);
tree.insert(4);
tree.insert(1);
tree.insert(6);
tree.insert(20);
tree.insert(15);
tree.insert(170);
//
//Try to get the binary tree below
/*
            9
    4               20
1       6       15      170
*/
//
//Recursive function to check wether the tree is correnct
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
