function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if(i === 1) {
      array.push(`I am ${i} strange loop.`);
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
  return 'done';
}

var i = 0;

function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(array) {
  do {
    array.shift();
    incrementVariable();
  } while (array.length > 0 && incrementVariable())
  return array;
}
