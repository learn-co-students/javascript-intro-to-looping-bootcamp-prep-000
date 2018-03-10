//First problem
function forLoop(arr) {
  for (let i = 0; i < 25; i++) {
    arr.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`);
  }
  return arr;
}


//Second Problem
function whileLoop(n) {
    while (n > 0) {
    console.log(`${n}`);
	  n--;
  }
  return 'done';
}


//Third Problem
function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.pop();
  } while (array.length > 0 && maybeTrue());
  return array;
}
