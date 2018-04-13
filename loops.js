function doWhileLoop(arr){
  do{
    arr.pop();
  }
  while (maybeTrue() || arr.length === 0);
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}
