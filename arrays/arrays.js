//Arrays -Data structure that organizes items in a single contiguous memory space
const letters = ["a", "b", "c", "d", "e"];
//
//Operations
//Lookup/Access O(1) -constant time
letters[2];
//
//Push -insert at last index O(1) -constant time
letters.push("f");
//
//Pop - deletion at last index O(1) -constant time
letters.pop();
//
//Insert at first index O(n) - linear time
letters.unshift("james");
//There is iteration over all  items to change their indices
//
//Insert in the middle or any other index O(n) - linear time
letters.splice(2, 0, "King");
//
//Deletion of any item apart form the last item O(n) - linear time
letters.splice(2, 1);

//
//Custom array implementation
class MyArray {
  //
  //
  constructor() {
    this.length = 0;
    this.data = {};
  }
  //
  //Retrieve item of given index
  get(index) {
    return this.data[index];
  }
  //
  //Insert an element at the last index
  push(item) {
    //
    //Add the item to the array
    this.data[this.length] = item;
    //
    //Change the length
    this.length++;
    //
    //Return the new length
    return this.length;
  }
  //
  //Delete item at the last index while returning
  pop() {
    //
    //Get the last item
    const lastItem = this.data[this.length1 - 1];
    //
    //Remove it from the array
    delete this.data[this.length - 1];
    //
    //Return the item that was removed
    return lastItem;
  }
  //
  //Delete element from the given idex
  delete(index) {
    //
    //Get the item that will be deleted
    const item = this.data[index];
    //
    //Delete the item
    this.shift(index);
    //
    //Return the deleted item
    return item;
  }
  //
  //Shift the elements
  shift(index) {
    //
    //Change the index of every element from specified index
    for (let i = index; i < this.length; i++) {
      //
      //Move the element up by a single index
      this.data[i] = this.data[i + 1];
    }
    //
    //Delete the last item in the array
    delete this.data[this.length - 1];
    //
    //Update the length of the array
    this.length--;
  }
}

//
// Testing
const array = new MyArray();
console.log(array.get(0));
array.push("hello");
array.push("I");
array.push("am");
array.push("james");
array.delete(1);
array.delete(1);