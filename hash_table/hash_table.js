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
  set(key, value) {
    //
    //Using the hashing function generate the address to store the given key value pair
    const address = this._hash(key);
    //
    //Store both the key and value in an array which will be appended to the hashtable
    //at the specified address
    this.data[address] = [key, value];
  }
  //
  //Get a value from the hash map given a key
  get(key) {
    //
    //Given a key get the address of the key
    const address = this._hash(key);
    //
    //Retrive the key value pare from the hashtable
    const pair = this.data[address];
    //
    //return the value of the specified key
    return pair[1];
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
//
//Retrieve an item from the hashtable
htable.get("grapes");e
