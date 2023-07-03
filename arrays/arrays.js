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
