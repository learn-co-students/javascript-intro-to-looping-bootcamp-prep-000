function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i === 0 ? '' :'s'}.`)
  }
  return array;
}
function whileLoop(num) {
  while (num > 0) {
    console.log(num--)
  }
  return "done";
}
function maybeTrue() {
  return Math.random() >= 0.5
}
function doWhileLoop(array) {
  do {
    array.pop();
  } while (array.length > 0 && maybeTrue());
  return array;
}