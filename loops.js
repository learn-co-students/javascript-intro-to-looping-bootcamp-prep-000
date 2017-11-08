function forLoop (array) {

  for (var i = 0; i < 25; i++) {
    if (array[i] === 1) {
      array.push("I am 1 strange loop.");
    } else {
        array.push("I am " + i + " strange loops.");
      }
  }
  return array;
}

function whileLoop (num) {
  var i = num;
  while (i > 0) {
    console.log(--i)
  }
  return "done";
}

function doWhileLoop(array) {
    do {
      array.pop();
    } while (array.length > 0);
    return array;
}
