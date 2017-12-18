function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`);
  }
}

function whileLoop(n) {
  while (n > 0) {
    n--;
  }
  console.log('done');
}

function maybeTrue() {
  return Math.randome() >= 0.5;
}

function doWhileLoop(array) {
 do {
   array.pop();
 } while ((array.length > 0) || (maybeTrue()) === false));
}