function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
  return "done";
}
let i = 0;

function incrementVariable() {
  i = i + 1;
}
function doWhileLoop(array) {
  do {
    console.log(array.pop());
  } while (array.length > 0 && incrementVariable())
  return array;
}