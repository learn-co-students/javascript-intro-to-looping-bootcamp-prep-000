function forLoop(arr) {
  for ($i = 0; $i < 25; $i++) {
    if ($i == 1) {
      console.log("I am one strange loop.");
    }
    else {
      console.log("I am ${i} strange loops.");
    }
  }
  return arr;
}

function whileLoop(num) {
  while (num > 0) {
    console.log(num);
    num--;
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(arr) {
  do {
    array.shift();
  } while (array.length > 0 && maybeTrue());
  return arr;
}
