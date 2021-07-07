
function forLoop(array) {
  for(var i = 0; i <25; i++) {
    array[i] = `i am ${i} strange loops`;
  }
  return array;
}

function whileLoop(int) {
  while(int > 0) {
    console.log(int);
  }
  return "done";
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
 
  do {
    array.pop();
  } while (maybeTrue() && array.length > 0);
}

