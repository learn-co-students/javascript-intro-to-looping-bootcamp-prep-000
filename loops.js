function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i != 1) {
      array.push("I am " + i + " strange loops.");
    } else {
      array.push("I am " + i + " strange loop.");
    }
    // When the if statment is reversed
    //    if ( i = 1 )
    // it results in fatal error process out of memory
  }
  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
  return 'done'
}

function doWhileLoop(array) {
  var i = 0;

  function incrementVariable() {
    i = i + 1;
  }

  do {
    array.pop();
  } while (array.length > 0 && incrementVariable());

  return array
}
