//
//Write two functions that find the factorial of any number
//One should use recursion, the other should just use a for loop
//5! => 5*4*3*2*1
//
//tail recursion - recursion whereby the recursive call is the last call in the recursive function
function factorial_recursive(number, factorial = 1) {
  //
  //We can only find the factorial of positive numbers
  if (number < 0) return "Please enter a positive number";
  //
  //Identify the base case
  if (number <= 1) return factorial;
  //
  //Identify the recursive case
  return factorial_recursive(number - 1, factorial * number);
}
//
//Calculate the factorial using a loop
function factorial_loop(number) {
  //
  //We can only find the factorial of positive numbers
  if (number < 0) return "Please enter a positive number";
  //
  //Keep track of the factorial
  let factorial = 1;
  //
  //Calculate the factorial
  for (let i = number; i > 1; i--) {
    factorial = factorial * i;
  }
  //
  //Return the calculated factorial
  return factorial;
}
factorial_loop(5);
factorial_recursive(5);
