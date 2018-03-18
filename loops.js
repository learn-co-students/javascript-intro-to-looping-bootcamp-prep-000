function forLoop(array) {

  array.push("I am 1 strange loop.");

  for (let i = 1; i < 25; i++) {
    array.push(`I am ${i} strange loops.`);
  }

  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n--);
  }
  return 'done';
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
