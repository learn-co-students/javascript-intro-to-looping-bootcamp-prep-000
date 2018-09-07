function forLoop(array) {
  var i;
  for (let i = 0; i < 25; i++) {
    if (i != 1){
      array.push(`I am ${i} strange loops.`);
    } else {
      array.push(`I am 1 strange loop.`);
    }
  }
  return array;
}

function whileLoop(number) {
  while (number > 0){
    console.log(--number);
  }
  return 'done';
}

function doWhileLoop(array) {
  do {
  array.pop();
  incrementVariable();
  } while (array.length > 0 && incrementVariable());
  return array;
}

var i = 0;

function incrementVariable() {
  i = i + 1;
}
