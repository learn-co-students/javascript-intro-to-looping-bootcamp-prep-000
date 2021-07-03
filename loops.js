function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    var append = `${i <= 1 ? '' : 's'}`;
    var msg = `I am ${i} strange loop${append}.`;
    array.push(msg);
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n--);
  }
  return 'done';
}

var i = 0;

function incrementVariable() {
  i = i+1;
}

function doWhileLoop(array) {
  do {
    array.pop();
  } while (array.length > 0 && incrementVariable())
  return array;
}
