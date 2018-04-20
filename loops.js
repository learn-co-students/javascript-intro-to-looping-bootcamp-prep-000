function forLoop(array) {
  for (var i = 1; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.");
    }
    array.push("I am ${i} strange loops.");
  }
  return array;
}

function whileLoop(i) {
  while (i > 0) {
    console.log(i--);
  }
  return 'done';
}

function doWhileLoop(array) {
  do {
    array.pop();
  } while (maybeTrue() && array.length > 0);
  return array;
}

function maybeTrue() {
  return Math.random() >= 0.5
}