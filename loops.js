

function forLoop(arr) {
  for (var i = 1; i <= 25; i++) {
    arr.push(`I am ${i} strange loop${i === 1 ? '':'s'}.`);
  }
  return arr;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    --n;
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}
function doWhileLoop(arr) {
  do {
    arr.pop();
  } while(maybeTrue() && arr.length > 0);
  return arr;
}