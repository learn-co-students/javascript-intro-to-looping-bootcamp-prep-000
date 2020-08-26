function forLoop(arr) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      arr.push('I am 1 strange loop.');
    } else {
      arr.push(`I am ${i} strange loops.`)
    }
  }
  return arr;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
  return 'done';
}

function doWhileLoop(num) {
  var idx = 0;
  do {
    console.log('I run once regardless.')
  } while (idx++ < num - 1);
}
