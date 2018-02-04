function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop.`)
  }
  return array;
}

function whileLoop(n) {
  while (n !== 'done') {
    if (n === 0) {
      n = 'done'
    } else{
      console.log(n);
      n--;
    }
  }
  return n;
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (array.length)
  return array;
}