//We know how many times the lopp has to be fun #25
function forLoop(arr) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      // Use `push` to add the string to the array
      arr.push(`I am 1 strange loop.`);
    } else {
      arr.push(`I am ${i} strange loops.`);
    }
  }
  // Return your array
  return arr;
}
// Create the array and pass it into the function
var arr = [];
// `out` captures the returned array
var out = forLoop(arr);
console.log(out);

//WhileLopp(n) counts down from n to 0. "We don't know hoe many times it //has to run"

function whileLoop(n){
  
  var countDown = n;

    while (countDown > 0) {
      console.log(--countDown)
    }
    return "done";

}

//Define a function called doWhileLoop in loops.js. The function should take an integer as an argument. Use the incrementVariable() function (you can copy it from this README) in the condition, and console log "I run once regardless." while incrementVariable() returns a number less than the parameter received. (Your condition might look something like incrementVariable() < num.) Remember that it should also console log when receiving 0 as a parameter because the do-while runs before the condition is checked.


function doWhileLoop(i){
  
  var incVar = 0;

function incrementVariable() {
  
  incVar += 1;
  return incVar;
}

do {
  console.log("I run once regardless.");
} while (incrementVariable() < i);
  
  
  
}
 
  
  
  
  
  
  
  





