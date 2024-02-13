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
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  //
  //Develop a method to add values to the hash table
  set(key, value) {
    //
    //Using the hashing function generate the address to store the given key value pair
    const address = this._hash(key);
    //
    //
    //Check the given address to ensure that no data exist initially
    if (!this.data[address]) {
      //
      //If no data was found at the given address create a storage bucket
      this.data[address] = [];
    }
    //
    //Now store the infomation in the given bucket
    this.data[address].push([key, value]);
  }
  //
  //Get a value from the hash map given a key
  get(key) {
    //
    //Given a key get the address of the key
    const address = this._hash(key);
    //
    //Retrive the storage bucket under the given address
    const bucket = this.data[address];
    //
    //If there is no data stored in the bucket return
    if (bucket.length < 0) return undefined;
    //
    //Go through all the elements stored in the bucket to locate the given key
    return bucket.find((element) => element[0] === key)[1];
  }
  //
  //Extract all the keys of the key value pairs stored in the hashmap
  keys() {
    //
    //A container to hold the keys
    const collection = [];
    //
    //Iterate over the entire hash map collecting the keys
    this.data.forEach((bucket) =>
      //
      //Acess all the key value pairs collecting all the keys and adding them to the colleciton
      bucket.forEach((pair) => collection.push(pair[0]))
    );
    //
    //return the collection of the keys
    return collection;
  }
}
//
//Usage
//
//Object instansiation
const htable = new myHashTable(10);
//
//Add a value to the hashtable
htable.set("grapes", 10000);
htable.set("apples", 10000);
htable.set("bananas", 10000);
htable.set("mangoes", 10000);
htable.set("peach", 10000);

//
//Retrieve an item from the hashtable
// console.log(htable.get("grapes"));
//
//Get all the keys of the given hashmap
console.log(htable.keys());
