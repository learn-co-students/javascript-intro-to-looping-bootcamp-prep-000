//create forLoop function with a for loop that adds strings to array
function forLoop(array) {
  for (let i=0; i<25; i++) {
    if (i===1) {
      array.push("I am 1 strange loop.");
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}
// create a whileLoop function to take in countdown and return done string

function whileLoop(num) {
  while(num > 0){
  console.log(--num);
  }
  return "done";
}
//make a doWhileLoop function that uses the incrementVariable(). i think i need to nest the function in this funt.?

function doWhileLoop(num) {
  let i= 0;
  function incrementVariable() {
    i = i + 1;
    return i;
  }
  do {
    console.log("I run once regardless.");
  } while (incrementVariable() < num);
}
