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
  //
  peek() {}
  //
  //
  enqueue() {}
  //
  //
  dequeue() {}
  //
  //
  isEmpty() {}
}
