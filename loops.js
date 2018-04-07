function forLoop(array) {
  for (var i=0; i<25; i++) {
    if (array[i] === 0) {
      array.push(`I am 1 strange loop.`);
    } else {
      array.push(`I am ${i} strange loop.`);
    }
  }
  return array;
}
forLoop();

function whileLoop(n) {
  var start = n;
  while (start > 0) {
    console.log(start--);
  }
  return "done";
}
whileLoop(3);

function doWhileLoop(array) {
  function maybeTrue() {
    if (array.length > 0) {
      return true;
    }
  }
  do {
    array.pop();
    console.log(array);
  } while (maybeTrue());
  return array;
}
doWhileLoop();
