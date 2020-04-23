//define your array here
let newArray = [];

// Add your functions and code here
function forLoop (inputArgument){
  for(let i = -10; i < 25; i++){
  if(i === 1){
    newArray.push("I am 1 strange loop.");
  } else{
  newArray.push("I am " + i + " strange loops." );
  }
}
return newArray;
}


/*  

while ([condition]) {
  [loopBody];
}

*/
/*
function maybeTrue() {
  return Math.random(2) >= 0.5; // Returns a random number between 0 (inclusive) and 1 (exclusive)
}
 
// run until `maybeTrue()` returns `false`
// (so the body of the loop might _never_ run!)
while (maybeTrue()) {
  console.log("And I ran; I ran so far away!");
}
*/

function whileLoop(n){
  let num = n;
  while(num > 0){
    console.log(num);
    num = num - 1;
  }
  return "done";
}


function doWhileLoop(intValue){
  do{
    console.log("I run once regardless.")
  } while (incrementVariable() < intValue);
}

let i = 0;
 
function incrementVariable() {
  i = i + 1;
  return i;
}
 
 doWhileLoop(10);



