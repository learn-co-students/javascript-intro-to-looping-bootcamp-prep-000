function forLoop(array) {
  var startIndex = array.length;
  
  for (let i = 0; i < 25; i++) {
    array[startIndex + i] = `I am ${i} strange loop.`;
    if (i !== 1) {
      array[startIndex + i].concat('s');
    }
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