//
//Useful for storing key value pairs
//
//
const user = {
  age: 23,
  name: "james",
  gender: "Male",
  bankBalance: () => {
    console.log("You are poor oooh!!!");
  },
};

//
//Access/ look up - O(1) or O(n) -where there is collision
user.age;
//
//Deletion - O(1)
//
//Insertion -O(1)
user.skills = "coding";
//
//Search- O(1)

//
//Implement our own version of hash table
class myHashTable {
  constructor(size) {
    //
    //Initialize an array instance of given size
    this.data = new Array(size);
  }
  //
  //Hash function that generates the storage address of a given key
  _hash(key) {
    let hash = 0;
    for (i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  //
  //Develop a method to add values to the hash table
  set() {}
}
