

function forLoop(x) {
  for (let i = 0; i < 25; i++) {
    if ( i !== 1 ) {
    x.push(`I am ${i} strange loops.`);
    } else {
    x.push("I am 1 strange loop.");
    } 
  }
  return x;
}

function whileLoop(n) {
  while (n > 0) {
  console.log(n);
  n--;
  }
  return 'done';
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (array.length > 0)
  return array
}