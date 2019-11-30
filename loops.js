function incrementVariable(n){
  return n + 1;
}

function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    var n = parseInt(i);
    var newArray = array;
    var newString = `I am ${n} strange loop`;
    if (n === 1) {
      newString = newString + '.';
      newArray.push(newString);
    }
    else {
      newString = newString + 's.';
      newArray.push(newString);
    }
  }
  return newArray;
}

function whileLoop(n){
  while (n > 0) {
    console.log(--n);
  }
  return 'done';
}

function doWhileLoop (num) {
  var n = 0;
  do {
    console.log ( 'I run once regardless.');
    n = incrementVariable(n);
  }
  while (n < num);
}