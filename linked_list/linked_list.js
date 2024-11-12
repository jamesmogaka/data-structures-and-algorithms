//
// The time complexity of linked list are as follows:
//Operation     Big O
//Prepend       O(1)  ---> Inserting at the head
//Append        O(1)  ---> Inserting at the tail
//Traversal     O(n)  ---> Going through the elements in the linked list
//Insert        O(n)
//Delete        O(n)
//
//
//Write a linked list to hold the above infomation
//1 --> 10 --> 5 --> 16

// const myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

//
//This is a custom linked list class
class LinkedList {
  //
  //We need the data that will be stored in the first node since a linked list cannot be empty
  constructor(value) {
    //
    //Using the given value set it as the head of the linked list
    this.head = {
      value: value,
      next: null,
    };
    //
    //Since we only have one node in the list it will be both the head and the tail
    this.tail = this.head;
    //
    //We also should keep track of the length of the list
    this.length = 1;
  }
  //
  //Append is adding items at the tail of the liked list
  append(value) {
    //
    //Create a new data node with the given value
    const newNode = {
      value: value,
      next: null,
    };
    //
    //Update the next value to the tail
    this.tail.next = newNode;
    //
    //Finally set the tail to the newly created node
    this.tail = newNode;
    //
    //Increment the length of the linked list
    this.length++;
  }
  //
  //Prepend is adding data nodes at the begining of the linked list
  prepend(value) {
    //
    //First create the node using the value
    const node = {
      value: value,
      next: null,
    };
    //
    //Add a pointer to the first element
    node.next = this.head;
    //
    //Update the head with the new node
    this.head = node;
    //
    //Increment the length
    this.length++;
  }
  //
  //Insert a given value at a given index in the linked list
  insert(index, value) {
    //
    //Create a new node using the value
    const node = {
      value: value,
      next: null,
    };
    //
    //Identify the starting point of the linked list
    let prev = this.head;
    //
    //Traverse to the specified index
    for (let i = 1; i < index - 1; i++) prev = prev.next;
    //
    //Identify the next node in the linked list
    const next = prev.next;
    //
    //Insert the node between the previous and the next by updating the pointers
    prev.next = node;
    //
    node.next = next;
    //
    //Update the length of the linked list
    this.length++;
  }
  //
  //Remove a node of the specified index from the linked list
  remove(index) {
    //
    //Get a hold of the sub chain where the index is located
    //This consist of :
    //1.The previous
    let prev = this.head;
    //
    //Iterate to the node just before the specified index
    for (let i = 0; i < index - 1; i++) prev = prev.next;
    //
    //At this point we have the previous node Get:
    //2.The node to delete
    const current = prev.next;
    //
    //Finally get the node after the current in the list
    const next = current.next;
    //
    //Make the previous node point to the next node leading to deletion of the current
    //from the linked list
    prev.next = next;
    //
    //Update the lengh by decrementing it
    this.length--;
    //
    //Finally print the list after deletion operation is successfull
    this.printList();
  }
  //
  //Print the data of the linked list  in an array
  printList() {
    //
    //Create an array container that will hold the list
    const list = [];
    //
    //The starting point of the list
    let currentNode = this.head;
    //
    //Go through the linnked list adding every element to the array collection
    while (currentNode) {
      //
      //Get the value of the current node and push it to the colleciton
      list.push(currentNode.value);
      //
      //Move to the next node
      currentNode = currentNode.next;
    }
    //
    //Finally print the collection of data
    console.log(list);
  }
  //
  //Reverse the linked list i.e.,
  // list of  1 --> 10 --> 16 --> 88
  //will look like 88 --> 16 --> 10 --> 1 after it is reversed
  reverse1() {
    //
    //Define a starting point for taversal of the llinked list
    let current = this.head;
    //
    //Create the hash map to hold the nodes values of the linked list
    const map = {};
    //
    //Go through all the nodes and store their values in the map
    for (let i = 1; i <= this.length; i++) {
      //
      //store the value using an index of i in the map
      map[i] = current.value;
      //
      //Update the current to reference  the next node
      current = current.next;
    }
    //
    //Update the head to the last value
    this.head = {
      value: map[this.length],
      next: null,
    };
    //
    //Update the tail of the list
    this.tail = this.head;
    //
    //Now construct a new linked list with the stored values
    for (let i = this.length - 1; i > 0; i--) {
      //
      //Append the rest of the nodes to the new list
      this.append(map[i]);
    }
    //
    //Print the list finally
    this.printList();
  }
  //
  //Reverse the linked list i.e.,
  // list of  1 --> 10 --> 16 --> 88
  //will look like 88 --> 16 --> 10 --> 1 after it is reversed
  //
  //1 <-- 10 <-- 16 <-- 88
  reverse() {
    //
    //Get a hold of the first element in the linked list
    let start = this.head;
    //
    //Update the tail to the initial head
    this.tail = this.head;
    //
    //Get the secod node in the list also
    let second = start.next;
    //
    //Iterate over the remaining element as long as a next node is present doing the following
    while (second) {
      //
      //Get a hold of the next node in the list
      const third = second.next;
      //
      //Now update the pointers to show the first is following the second
      second.next = start;
      //
      //FInally update the start and second nodes whith the next elements in the list
      start = second;
      //
      second = third;
    }
    //
    //Make the initial head point to null
    this.head.next = null;
    //
    //Now update the head of the list
    this.head = start;
    //
    //Finally print the list 
    this.printList();
  }
}
//
//Usage of the linked list
const myLinkedList = new LinkedList(10);
//
//Add data to the tail end of the linked list
myLinkedList.append(5);
myLinkedList.append(16);
//
//Add a value at a specified index
myLinkedList.insert(2, 4);
//
myLinkedList.insert(2, 200);
//
//Add data from the head of the linked list
myLinkedList.prepend(1);
//
//Print the linked list
myLinkedList.printList();
// //
// //delete the node on the second index
// myLinkedList.remove(2);
//.
//reverse the linked list
myLinkedList.reverse();

//
//Doubly linked list
class DoublyLinkedList {
  //
  //We need the data that will be stored in the first node since a linked list cannot be empty
  constructor(value) {
    //
    //Using the given value set it as the head of the linked list
    this.head = {
      prev: null,
      value: value,
      next: null,
    };
    //
    //Since we only have one node in the list it will be both the head and the tail
    this.tail = this.head;
    //
    //We also should keep track of the length of the list
    this.length = 1;
  }
  //
  //Append is adding items at the tail of the liked list
  append(value) {
    //
    //Create a new data node with the given value
    const newNode = {
      prev: this.tail,
      value: value,
      next: null,
    };
    //
    //Update the next value to the tail
    this.tail.next = newNode;
    //
    //Finally set the tail to the newly created node
    this.tail = newNode;
    //
    //Increment the length of the linked list
    this.length++;
  }
  //
  //Prepend is adding data nodes at the begining of the linked list
  prepend(value) {
    //
    //First create the node using the value
    const node = {
      prev: null,
      value: value,
      next: null,
    };
    //
    //Add a pointer to the first element
    node.next = this.head;
    //
    //Update the previous head to point to the new node
    this.head.prev = node;
    //
    //Update the head with the new node
    this.head = node;
    //
    //Increment the length
    this.length++;
  }
  //
  //Insert a given value at a given index in the linked list
  insert(index, value) {
    //
    //Create a new node using the value
    const node = {
      prev: null,
      value: value,
      next: null,
    };
    //
    //Identify the starting point of the linked list
    let prev = this.head;
    //
    //Traverse to the specified index
    for (let i = 1; i < index - 1; i++) prev = prev.next;
    //
    //Identify the next node in the linked list
    const next = prev.next;
    //
    //Update the node to indicate the prev as the previous node
    node.prev = prev;
    //
    //Insert the node between the previous and the next by updating the pointers
    prev.next = node;
    //
    //Update the next node to indicate the node as the previous  node
    next.prev = node;
    //
    //Reconnect the next node in the linked list
    node.next = next;
    //
    //Update the length of the linked list
    this.length++;
  }
  //
  //Remove a node of the specified index from the linked list
  remove(index) {
    //
    //Get a hold of the sub chain where the index is located
    //This consist of :
    //1.The previous
    let prev = this.head;
    //
    //Iterate to the node just before the specified index
    for (let i = 0; i < index - 1; i++) prev = prev.next;
    //
    //At this point we have the previous node Get:
    //2.The node to delete
    const current = prev.next;
    //
    //Finally get the node after the current in the list
    const next = current.next;
    //
    //Update the previouse of the next node to be the prev node
    next.prev = prev;
    //
    //Make the previous node point to the next node leading to deletion of the current
    //from the linked list
    prev.next = next;
    //
    //Update the lengh by decrementing it
    this.length--;
    //
    //Finally print the list after deletion operation is successfull
    this.printList();
  }
  //
  //Print the data of the linked list  in an array
  printList() {
    //
    //Create an array container that will hold the list
    const list = [];
    //
    //The starting point of the list
    let currentNode = this.head;
    //
    //Go through the linnked list adding every element to the array collection
    while (currentNode) {
      //
      //Get the value of the current node and push it to the colleciton
      list.push(currentNode.value);
      //
      //Move to the next node
      currentNode = currentNode.next;
    }
    //
    //Finally print the collection of data
    console.log(list);
  }
}

// //
// //Usage of the linked list
// const doubly = new DoublyLinkedList(10);
// //
// //Add data to the tail end of the linked list
// doubly.append(5);
// doubly.append(16);
// //
// //Add a value at a specified index
// doubly.insert(2, 4);
// //
// doubly.insert(2, 200);
// //
// //Add data from the head of the linked list
// doubly.prepend(1);
// //
// //Print the linked list
// doubly.printList();
// //
// //delete the node on the second index
// doubly.remove(2);
