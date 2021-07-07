function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`);
  }
  return array;
}

function whileLoop(n) {
  var i = n;
  while (i > 0) {
    console.log(i);
    i--;
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.splice(1);
  } while (maybeTrue());
  return array;
}