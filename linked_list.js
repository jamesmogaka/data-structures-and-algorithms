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
      next: this.head,
    };
    //
    //Update the head with the new node
    this.head = node;
    //
    //Increment the length
    this.length++;
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
//Add data from the head of the linked list
myLinkedList.prepend(1);
//
console.log(myLinkedList);
