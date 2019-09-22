function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loops.`);
  }
  return array;
}

function whileLoop(i) {
  while (i > 0){
    console.log(i--);
  }
  return 'done';
}

function maybeTrue () {
  return Math.random() >= 0.5;
}

function doWhileLoop(array) {
  do {
    array.pop();
  } while (maybeTrue());
  return array;
}