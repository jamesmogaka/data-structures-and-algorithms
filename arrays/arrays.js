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
//const array = new MyArray();
//console.log(array.get(0));
//array.push("hello");
//array.push("I");
//array.push("am");
//array.push("james");
//array.delete(1);
//array.delete(1);

//
//Write a function to reverse a given string
//"Hi i am james" - input
//"semaj ma i iH" - output

function reversString(str) {
  //
  //Divide the string into individual characters
  const characterArray = str.split("");
  //
  //
  const reverseArray = [];
  //
  //Iterate over the character array creating a revers array
  for (i = 0; i < str.split("").length; i++) {
    //
    //remove the last element adding it to an array
    reverseArray.push(characterArray.pop());
  }
  return reverseArray.join();
}
//
//
function reverseString1(str) {
  //
  //Create array to hold outcome of reversing
  const reverseArray = [];
  //
  //add the characters to the result array in reverse order
  for (let i = str.split("").length; i >= 0; i--) {
    reverseArray.push(str[i]);
  }
  //
  //Return the reverse string
  return reverseArray.join("");
}
//
//Much more readable
function reverseString2(str) {
  return str.split("").reverse().join("");
}

//reverseString2("Hi i am james");

//
//Q - How can you merge two sorted arrays such that you end up with a larger sorted array
//[0, 3, 4, 31],[4, 6, 30] - input
//[0, 3, 4, 4, 6, 30, 31] - output

//
//Brute force solution
function mergeSortedArrays(arr1, arr2) {
  //
  //Do Checks on inputs
  //Result sorted array
  let index = 0;
  //
  //Get the longest array of the two
  if (arr1.length > arr2.length) {
    //
    //Iterate over it
    for (i = 0; i < arr1.length; i++) {
      //
      //Compare the elements of the two arrays to get the smallest
      if (arr1[i] >= arr2[index]) {
        //
        //insert an element from the second array where the arr1 element is larger
        arr1.splice(i, 0, arr2[index]);
        //
        //Increment the pointer to the second array
        index++;
      } else {
        //
        //If the element in the first array is smaller continue to the next element in the iteration
        continue;
      }
    }
  } else {
    //
    //Iterate over it
    for (i = 0; i < arr2.length; i++) {
      //
      //Compare the elements of the two arrays to get the smallest
      if (arr2[i] >= arr1[index]) {
        //
        //insert an element from the second array where the arr1 element is larger
        arr2.splice(i, 0, arr1[index]);
        //
        //Increment the pointer to the second array
        index++;
      } else {
        //
        //If the element in the first array is smaller continue to the next element in the iteration
        continue;
      }
    }
    return arr2;
  }
  return arr1;
}

//
//Merge two sorted arrays retaining the merged order
function mergeSortedArrays2(arr1, arr2) {
  //
  //Check the inputs
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }
  //
  //Array to hold the resulting merged array
  const mergedArray = [];
  //
  //Get the first element in both arrays
  const arr1Value = arr1[0];
  const arr2Value = arr2[0];
  //
  //Define the traversal indices
  let index1 = 1;
  let index2 = 1;
  //
  //Compare the two values from the arrays pushing the smaller one to the merged array
  while (arr1Value || arr2Value) {
    //
    //Compare to get the value to push first
    if (arr1Value || arr1Value < arr2Value) {
      console.log(arr1Value, arr2Value);
      //
      //push to the merged array
      mergedArray.push(arr1Value);
      //
      //Point the array value to the next element
      arr1Value[index1];
      //
      //Increment the index of the corresponding array
      index1++;
    } else {
      //
      //push to merged array
      mergedArray.push(arr2Value);
      //
      //Point the array value to the next element
      arr2Value[index2];
      //
      //Increment index of corresponding array
      index2++;
    }
  }
  //
  return mergedArray;
}

mergeSortedArrays2([0, 3, 4], [4, 6, 30, 31]);
