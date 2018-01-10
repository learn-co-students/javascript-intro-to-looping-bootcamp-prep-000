function forLoop(arr) {
  for ($i = 0; $i < 25; $i++) {
    if ($i == 1) {
      arr[$i] = "I am one strange loop.";
    }
    else {
      arr[$i] = "I am " + $i + " strange loops.";
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
    arr.shift();
  } while (arr.length > 0 && maybeTrue());
  return arr;
}
