function forLoop (array) {
  for (var i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`)
  }
  return array;
}

function whileLoop (n) {
  while (n > 0) {
  console.log(n--);
  }
  return "done";
}

function doWhileLoop(array) {
  var i = 0;
  function incrementVariable() {
  i++; }
  do {
  array.length--
  } while (array.length > 0 && incrementVariable());
  return array;
}
