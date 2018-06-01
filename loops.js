function forLoop(array) {
  for (var i = 0; i<25; i++) {
    if (i===1) {
      array.push('I am 1 strange loop');
    }
      else {
        array.push(`I am ${i} strange loops`);
      }
  }
}

function whileLoop(number) {
  while (number > 1) {
    number = number -1;
    if (number===0) {
    console.log('done')}
    else {
    console.log(number);}
  }
}

function maybeTrue() {
    return Math.random() >= 0.5;
  }
  
function doWhileLoop(array) {
  do {
    array.pop();
    return array;
  } while (array.length > 0 && maybeTrue());
}