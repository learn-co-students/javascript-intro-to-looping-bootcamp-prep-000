function forLoop(ary) {
  for (var i = 1; i <= 25; i++) {
    ary.push(`I am ${i} strange loop${i === 1 ? '' : 's'}`);
  }
  return ary;
}

function whileLoop(n) {
  var i = n;
  while (i > 0) {
    console.log(n);
    i--;
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(array) {
  do {
    array.pop();
  } while (array.length > 0 && maybeTrue());
  return array;
}
