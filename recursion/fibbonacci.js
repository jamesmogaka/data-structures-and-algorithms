//
//Given a number N return the index value of the fibbonacci sequence where the sequence is:
//
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
//
//the pattern of the sequence is that each value is the sum of the 2 previous values, that means
//for N=5 -> 2 + 3
//
//Iterative approach
function fib_iterative(n) {
    //
    //Keep track of all the numbers we pass trough in the sequencce
    let sequence = [0, 1];
    //
    //Repeat adding the last two number of the specified number of times
    for (let i = sequence.length; i <= n; i++) {
      //
      //Add the last two numbers of the sequence and append it to the sequence
      sequence.push(
        sequence[sequence.length - 2] + sequence[sequence.length - 1]
      );
    }
    //
    //Return the expression that will evaluate to the number at the given index
    return ` ${sequence[sequence.length - 3]} + ${
      sequence[sequence.length - 2]
    } = ${sequence[sequence.length - 1]}`;
  }

  fib_iterative(5);
  //
  //Recursive approach
  function fib_recursive(n) {}
  