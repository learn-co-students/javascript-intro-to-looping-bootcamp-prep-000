function doWhileLoop(int) {
  function incrementVariable() {
    var i;
    i = i + 1;
    return i;
  } do {
    console.log("I run once regardless.");
  } while(incrementVariable() < int);
}

console.log(doWhileLoop(10))
