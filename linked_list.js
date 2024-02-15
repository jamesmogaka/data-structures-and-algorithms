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
//10 --> 5 --> 16

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
  //Mechanisim to add data to the linked list
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
}
//
//Usage of the linked list
const myLinkedList = new LinkedList(10);
//
//Add values to the linked list
myLinkedList.append(5);

console.log(myLinkedList);

myLinkedList.append(16);

console.log(myLinkedList);
