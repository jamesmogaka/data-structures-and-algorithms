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
//Implementation of the custom stack based on a linked list
class Stack1 {
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
    //If the list is empty we need to add the node as both the top and bottom node
    if (this.isEmpty()) {
      //
      //If the list is empty add the node to the bottom since it is the first element
      this.bottom = node;
      //
      //Since there is one node in the stack the top is the same node that is the bottom
      this.top = this.bottom;
    } else {
      //
      //Get the top element
      const first = this.top;
      //
      //Update the top to be the new node
      this.top = node;
      //
      //Make th next node of the top to be the initial top node
      this.top.next = first;
    }
    //
    //Update the length of the stack
    this.length++;
    //
    return this;
  }
  //
  //This removes the top most element from the stack
  pop() {
    //
    //If the list is empty do nothing
    if (this.isEmpty()) return undefined;
    //
    //If only one element exist clear the bottom
    if (this.top === this.bottom) this.bottom = null;
    //
    //Store the initial top
    const popped = this.top;
    //
    //Update the top to the next node after the top
    this.top = this.top.next;
    //
    //Update the length of the stack
    this.length--;
    //
    //Return the just poped item
    return popped.value;
  }
  //
  //Check if ther is any node in the linked list and returns a true if no node exists otherwise a false
  isEmpty() {
    //
    //Check the length to see if there is any node in the stack
    return this.length === 0 ? true : false;
  }
}

//
//Implementation of the custom stack based on an array
class Stack {
  //
  constructor() {
    //
    //The array that will store the data
    this.data = [];
  }
  //
  //Look at the element that is on top of the stack
  peek() {
    //
    //Return the top element
    return this.data[this.data.length - 1];
  }
  //
  //Given a value add it to the stack and update the top to reflect the added value
  push(value) {
    //
    //Add the value to the data container
    this.data.push(value);
    //
    //return the stack
    return this;
  }
  //
  //This removes the top most element from the stack
  pop() {
    //
    //Get a hold of the item to be removed
    const popped = this.peek();
    //
    //popp the item from the stack
    this.data.pop();
    //
    //Return the just poped item
    return popped;
  }
}
//
//Create an instance of the stack
const myStack = new Stack();
//
//Use the push to add values to the stack
console.log(myStack.push("google"));
console.log(myStack.push("Udemy"));
console.log(myStack.push("Discord"));
//
//Check at the top of the stack
console.log(myStack.peek());
//
//Remove the top two elements of the stack
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack);
