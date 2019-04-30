// Build a for loop

function forLoop (array) {
  for (let i = 0; i < 25; i++){
 if (i === 1)  {
   array.push(`I am 1 strange loop.`)
 } else {
   array.push(`I am ${i} strange loops.`)
 }
}
return array
}

//Build a while loop

let countdown = 0;

function whileLoop(n){
  while (n > countdown) {
    console.log("done")
  }
}

// Build a Do-While loop

function doWhileLoop (num){
  do {
    console.log("I run once regardless.");
  } while (incrementVariable() < num);
}