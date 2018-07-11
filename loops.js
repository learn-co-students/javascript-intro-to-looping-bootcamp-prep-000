// build a function forLoop + takes an (array) as an argument
// start from 0, use a for loop, add a string to the array 25 times
// if i = 1 ->> "I am 1 strange loop"
// if i = anything else ->> "I am ${i} strange loops."

function forLoop(array) {
   for (var i = 0; i < 25;  i++) {
     if (i === 1) {
      array.push("I am 1 strange loop.")
     } else {
        array.push(`I am ${i} strange loops.`);
       } 
    }  return array
}

// create function "whileLoop" + takes (number) as argument
// count down using "console.log" from the passed in number to 0
// then "return" the string 'done'

function whileLoop(n) {
  while(n > 0) {
    console.log(--n)
  }
  return "done"
}

// define "function(array)" doWhileLoop
// use condition = "maybeTrue()" from README
// remove elements from array UNTIL: 
//  (1) array is empty
//  (2) maybeTrue() = false
// TIP: 
// condition ~ array.length > 0 && maybeTrue()

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
}
  do {
    array.pop()
  } while ( array.length > 0 && maybeTrue() );
  return array
}