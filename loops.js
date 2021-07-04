// Build a function forLoop
// It takes an array as an argument.
// Start counting from 0, and, using a for loop, add a string to the array 25 times.
// If your i value is 1, add the string "I am 1 strange loop.";
// if your i value is anything else, add the string "I am ${i} strange loops.".
// (Remember flow control with if and else? And how do we interpolate i?) Then return the array.
function forLoop(array) {
   for ( let i = 0; i < 25; i++) {
     if (i === 1) {
       array.push(`I am 1 strange loop.`) //KEYWORD MISSED: it ADDS a string -> meaning you'd need to use .push() method
     } else {
       array.push(`I am ${i} strange loops.`)
     }
  }
  return array;
}

//Create a function called whileLoop in loops.js.
//The function should take a number as an argument.
//Using a while loop, count down (using console.log) from the passed in number to 0.
//Then return the string 'done'.
function whileLoop(n) {
  while (n > 0) {
    console.log(n--)
  }
  return 'done'
}

// Define a function called doWhileLoop in loops.js.
// The function should take an array as an argument.
// Use the maybeTrue() function (you can copy it from this README) as the condition,
// and remove elements from the array until the array is empty or until maybeTrue() returns false.
// (Your condition might look something like array.length > 0 || maybeTrue().)
// Finally, return the array.


function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
  }

  do {
    array.pop();
  } while (array.length > -1 && maybeTrue()); //-1 because until EMPTY, ensure that we use && and not ||
  return array
}
