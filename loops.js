function forLoop(array) {
  for (var i = 0; i < 25; i++) {
   array.push(`I am ${i} strange loop.`);
  }
  return array; 
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    --n;
  }
  return "done";
}

function doWhileLoop(array) {
  var length = array.length;
  do {
    array.pop();
  } while(array.length > 0 || array.length === " ");
  return array;
}