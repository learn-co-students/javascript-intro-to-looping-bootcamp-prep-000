function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.")
    } else {
      array.push(`I am ${i} strange loops`)
    }
  }
  return array;
}
function whileLoop(n) {
  var i = n;
  while (i > 0) {
    console.log(i);
    i--;
  }
  return "done";
}
// Use the maybeTrue() function as the condition, and remove elements from the array until the array is empty or until
// maybeTrue() returns false. (Your condition might look something like array.length > 0 && maybeTrue().) Finally, return the array.
function doWhileLoop(array) {

  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array.pop();
  } while (maybeTrue());
  return array;
}
