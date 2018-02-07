function forLoop (array) {
  for (var i = 0; i < 24; i++) {
    if (i === 1) {
      array.push('I am 1 strange loop');
    }
    array.push(`I am ${i} strange loops.`);
  }
  return array;
}

function whileLoop (num) {
  while (num >= 0) {
    console.log(num--);
    if (num === 0) {
      return 'done';
    }
  }
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop (array) {
  do {
    array.pop();
    return array;
  } while(array.length > 0 && maybeTrue());
}

