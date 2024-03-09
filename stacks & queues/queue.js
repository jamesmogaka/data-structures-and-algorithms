//
//This represents a single entry in the linked list
class Node {
  constructor(value) {
    //
    //Store the value
    this.value = value;
    //
    //Reference to the next node in the linked list .It is initially null
    this.next = null;
  }
}

//
//A custom queue implementation using linked list
class Queue {
  //
  constructor() {
    //
    //Keep track of the first item in the queue. When created its null since the queue is empty
    this.first = null;
    //
    //The item that was added last to the queue. Also empty on creation of the queue
    this.last = null;
    //
    //Finally the length of nodes in the queue
    this.length = 0;
  }
  //
  // Show the first node in the queue
  peek() {
    //
    return this.first;
  }
  //
  //Given a value create a node and add it to the linked list
  enqueue(value) {
    //
    //Create a new node
    const node = new Node(value);
    //
    //Check if the list is empty
    if (this.isEmpty()) {
      //
      //The node is first in list
      this.first = node;
      //
      //This means it also last in the queue since its the only node
      this.last = this.first;
    } else {
      //
      //Update the current last nodes next to point to the new node
      this.last.next = node;
      //
      //Update the last node to be the new node
      this.last = node;
    }
    //
    //Increment the length of the list to signify the added node
    this.length++;
    //
    //Return the new list
    return this;
  }
  //
  //THis removes the first element from the queue
  dequeue() {
    //
    //If the queue is empty return
    if (this.isEmpty()) return;
    //
    //If there is only one element clear the last also
    if (this.first === this.last) this.last = null;
    //
    //Store the first element in the list
    const dequeued = this.first;
    //
    //Make the second element the head
    this.first = this.first.next;
    //
    //Return the just dequeued node
    return dequeued.value;
  }
  //
  //Check if there is any node in the list
  //If none is present return true elese false
  isEmpty() {
    return this.length === 0 ? true : false;
  }
}
//
//Creating an instance of the queue
const myQueue = new Queue();
//
//Adding nodes to the queue
console.log(myQueue.enqueue("joy"));
console.log(myQueue.enqueue("Matt"));
console.log(myQueue.enqueue("pavel"));
console.log(myQueue.enqueue("samir"));
//
//Removing nodes from the queue
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
//
//Check the queue
console.log(myQueue);
//
//
console.log(myQueue.peek());
//
//TODO-Implement a queue using a stack
