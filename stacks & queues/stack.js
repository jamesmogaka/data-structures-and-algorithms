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

    const res = this.isEmpty();
    //
    //If the list is empty we need to add the node as both the top and bottom node
    if (this.isEmpty()) {
      //
      //If the list is empty add the node to the bottom since it is the first element
      this.bottom = node;
      //
      //Since there is one node in the stack the top is the same node that is the bottom
      this.top = this.bottom;
      //
      //Increment the length of the list
      this.length++;
      //
      return this;
    }
    //
    //If the list alredy has other nodes we just append the current node to be the top next and change the top to the node
    this.top.next = node;
    //
    //Update the top to the new node
    this.top = node;
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
    //If there is only one node in the list
    if (this.length === 1) {
      //
      //Store the element to be removed
      const popped = this.bottom;
      //
      //Delete the bottom
      delete this.bottom;
      //
      //Update the top to a null
      this.top = null;
      //
      //Decrement the length
      this.length--;
      //
      return popped.value;
    }
    //
    //Store the initial top
    const popped = this.top;
    //
    //Define the starting point of the navigation
    let next = this.bottom;
    //
    //Navigate to the second last item from the top
    for (let i = 1; i < this.length - 1; i++) next = next.next;
    //
    //Update its next pointer to point to nulll
    next.next = null;
    //
    //Finally change the top to the new element
    this.top = next;
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
