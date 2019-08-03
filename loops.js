function forLoop(inputArray) {
  for(var i = 0; i < 25; i++) {
    i + 1 === 1 ? inputArray.push(`I am 1 strange loop.`) : inputArray.push(`I am ${i + 1} strange loops`);
  }

  return inputArray;
}

function whileLoop(n) {
  while(n > 0) {
    console.log(n);
    n--;
  }
  return `done`;
}

function doWhileLoop(inputArray) {
  do {
    inputArray.pop();
  }while(inputArray.length > 0 && maybeTrue())

  return inputArray;
}

function maybeTrue() {
  return Math.random() >= 0.5
}
