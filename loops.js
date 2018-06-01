var array = [''];
var i;

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 0) {
      array.push("I am " + i + " strange loop.");
    } else {
      array.push("I am " + i + " strange loops."); 
    }
  } return array;
}

let countdown = 100;

function whileLoop(countdown) {
  while (countdown > 0) {
    console.log(--countdown);
  } return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(array) {
  do {
    array.pop();
  } while (array.length > 0 && maybeTrue());
  return array;
} 