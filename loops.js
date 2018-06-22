
function forLoop(arr) {
  for (let i = 0; i < 25; i++) {
      arr.push("I am ${i} strange loop${i === 0 ? '' : 's'}.");
  }
  return arr;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n--);
  }
  return "done";
}

function doWhileLoop(arr) {
  do {
    arr.pop();
  } while (arr.length > 0 && maybeTrue());
  return arr;
}