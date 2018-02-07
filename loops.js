function forLoop (array) {
  for (let i=0; i<25; i++) {
    if (i===0) {
      Array.push(`"I am 1 strange loop!"`);
    } else {
      Array.push(`"I am ${i + 1} strange loops!"`);
    }
    return forLoop();
  }
}

function whileLoop (n) {
  while (n>0) {
    console.log(n--);
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5
}


function doWhileLoop (array) {
  do {
    if (array.length > 0 && maybeTrue()) {
      delete array[0]
    } else {
      return false;
    }
  } while (maybeTrue());
}