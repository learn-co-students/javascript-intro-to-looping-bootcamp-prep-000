function forLoop(arr) {
  for (let i = 0; i < 25; i++) {
    arr.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`);
  }
  return arr;
}

function whileLoop(i) {
  while (i > 0) {
    console.log(--i);
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5;
}
function doWhileLoop(arr) {
  do {
    arr.pop();
  } while (arr.length > 0 && maybeTrue());
  return arr;
}