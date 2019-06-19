function forLoop(arr) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      arr.push(`I am 1 strange loop.`);
    } else {
      arr.push(`I am ${i} strange loops.`);
    }
  }
  return arr;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n)
    n--;
  }
  return "done";
}

function doWhileLoop(n) {
  let i = 0;
  do {
    console.log("I run once regardless.")
    i++
  } while (i < n);
}

