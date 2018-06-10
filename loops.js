var strangeArray = ["I am a strange array."];

function forLoop(strangeArray) {
  for (let i = 0; i<25; i++) {
    if (i === 1) {
      strangeArray.push("I am 1 strange loop.");
    }
    else {
      strangeArray.push("I am ${i} strange loops.");
    }
  }
  return strangeArray;
}

function whileLoop(number) {
  var count = number;
  while (count > 0) {
    console.log(--count);
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(array) {
  do {
    array.shift;
  } while (array.length > 0 || maybeTrue());
  return array;
}