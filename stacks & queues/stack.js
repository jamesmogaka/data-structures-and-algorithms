//
//Node class that represents a data node
//This is helpfull since the stack will be implemented using a liked list
class Node {
  //
  //To create a node we must know its value
  constructor(value) {
    //
    //Setup the nodes pointer
    this.next = null;
    //
    //Add the value to the node
    this.value = value;
  }
}
//
//Implementation of the custom stack
class Stack {
  //
  constructor() {
    //
    //Keep track of the top most node in the stack. Null since there are no nodes
    this.top = null;
    //
    //Keep track of the first element to be pushed to the stack. At the start there are no nodes in the stack
    this.bottom = null;
    //
    //Monitor the length of the stack. Initially its 0 since the stack has no elements
    this.length = 0;
  }
  //
  //Look at the element that is on top of the stack
  peek() {
    //
    //Return the top element
    return this.top;
  }
  //
  //Given a value create a node and add it to the stack
  //Ensure that the length of the stack is up to date
  push(value) {
    //
    //Create a new node with the value
    const node = new Node(value);
    //
    //
    //
    //Update the length of the stack
    this.length++;
  }
  //
  //
  pop() {}
  //
  //Check if ther is any node in the linked list and returns a true if no node exists otherwise a false
  isEmpty() {
    //
    //Check the length to see if there is any node in the stack
    this.length === 0 ? true : false;
  }
}
//
//Create an instance of the stack
const myStack = new Stack();
//
//Use the push to add values to the stack
myStack.push("google");
myStack.push("Udemy");
myStack.push("Discord");
//
//Check at the top of the stack
myStack.peek();
//
//Remove the top two elements of the stack
myStack.pop();
myStack.pop();
