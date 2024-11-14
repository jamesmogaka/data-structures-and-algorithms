//
//A function that references itself
//1.Idenitfy the base case of the recursive function
//2.Idenitfy the recursive case
//3.Get closer and closer and return when needed. Usually you have 2 returns
//
//The function bellow is an example of a simple recursive function
let counter = 0;
//
function inception() {
  //
  //The base case return to exit the function
  if (counter > 3) return "done";
  //
  //Increment the counter
  counter++;
  //
  //The recursive case
  //Return to ensure that the returned value by the base case is bubbled up
  return inception();
}
