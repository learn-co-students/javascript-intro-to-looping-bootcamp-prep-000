var array = [];

function forLoop(array) {
for (var i = 0; i < 25; i++) {
  array.push("Frank")
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return 'done'
}

function doWhileLoop(arrays) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
    arrays.pop();
  } while (arrays.length > 0 && maybeTrue())

  return arrays
}