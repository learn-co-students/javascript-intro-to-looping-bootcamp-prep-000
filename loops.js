function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am " + i + " strange loop.");
    }
    else {
      array.push("I am " + i + " strange loops.");
    }
  }
  return array
}

function whileLoop(num) {
  while (num > 0) {
    console.log(num);
    num--;
  }
  return 'done';
}

// function incrementVariable() {
//   var i = i + 1;
// }

function doWhileLoop(array) {
  do {
    array.pop();
  }
  while (array.length > 0); 
  return array
}