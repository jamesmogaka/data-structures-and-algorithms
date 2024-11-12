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
  insert(value) {
    //
    //Create a node with the given value
    const node = new Node(value);
    //
    //Check if the tree is empty
    if (!this.root) this.root = node;
    else {
      //
      //Mark the starting point of the treversal operation
      let current = this.root;
      //
      //The node that was treversed just befor the current node
      let prev;
      //
      //Traverse till the current node is null
      while (current) {
        //
        //Store the previous current
        prev = current;
        //
        //Searching for the next current
        current = current.value > node.value ? current.left : current.right;
      }
      //
      //After the traversal we now know the previous is the last node and we can insert the new node
      prev.value > node.value ? (prev.left = node) : (prev.right = node);
      //
      //we finally return the tree
      return this.root;
    }
  }
  //
  //Given a value go through the binary search tree and identify the value in the binary tree or
  //an undefined if the value is not in the tree
  lookup(value) {
    //
    //Starting proint of the traversal
    let current = this.root;
    //
    //Iterate over the nodes as long as the current is present
    while (current) {
      //
      //Check to see if the current maches the value
      if (current.value === value) return current;
      else {
        //
        //We need to update the current value
        current = current.value > value ? current.left : current.right;
      }
    }
    //
    //When we reach here we know that the value we are looking for is not in the list
    return undefined;
  }
  //
  //Given a value identify it in the tree then remove it and work on how to
  //replace the value with its largest child (child node in the right)
  remove(value) {
    //
    //Check if the tree is empty
    if (!this.root) return false;
    //
    //starting point
    let current = this.root;
    //
    //The node just before the current
    let prev;
    //
    //As long as there is a current node traverse to the given value
    while (current) {
      //
      //Check if the current is the value we are serching for
      if (current.value === value) break;
      //
      //Store the current as the previous node
      prev = current;
      //
      //Now chech the values to see if we will head to the left or the right
      current = current.value > value ? current.left : current.right;
    }
    //
    //At this point we know that we either did not find the value
    // or we found the value
    //The first thin is to ensure that the value is there otherwise return a -1
    if (!current) return false;
    //
    //In a case where the previous value is larger than the current
    //We should be updating the left of the previous otherwise the right
    if (prev.value > current.value) {
      //
      //Update the left child of the previous
      if (current.right) {
        //
        //Update the left to the right of the parent
        prev.left = current.right;
        //
        //Then attach the current left to the left of the prev.left
        prev.left.left = current.left;
      } else prev.left = current.left;
    } else {
      //
      //Update the left child of the previous
      if (current.right) {
        //
        //Update the left to the right of the parent
        prev.right = current.right;
        //
        //Then attach the current left to the left of the prev.left
        prev.right.left = current.left;
      } else prev.right = current.left;
    }
    //
    //return the just removed value
    return current.value;
  }
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
//Looking using the tree lookup
// console.log(tree.lookup(170));
// console.log(tree.lookup(9));
//
//Removing nodes from the tree
console.log(tree.remove(20));
console.log(tree.remove(170));
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
//
//Check to see if the tree is correct
console.log(traverse(tree.root));
