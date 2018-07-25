function forLoop(array){
  for (let i = 0; i < 25; i++){
    array.push("I am ${i} strange loop${i === 0 ? '' : 's'}.");
  }
  return array
}

// TODO: Create a function called whileLoop in loops.js. The function should take a number as an argument. Using a while loop, count down (using console.log) from the passed in number to 0. Then return the string 'done'

function whileLoop(n){
  while (n > 0){
    console.log(--n);
  }
  return "done"
  
}

// TODO: Define a function called doWhileLoop in loops.js. The function should take an array as an argument. Use the maybeTrue() function (you can copy it from this README) as the condition, and remove elements from the array until the array is empty or until maybeTrue() returns false. (Your condition might look something like array.length > 0 && maybeTrue().) Finally, return the array.


function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}
 
// run until `maybeTrue()` returns `false`
// (so the body of the loop might _never_ run!)
while (maybeTrue()) {
  console.log("And I ran; I ran so far away!");
}


function doWhileLoop(array){
  do {
    array.pop();
    } while (array.length > -1 && maybeTrue());
  return array;
}


