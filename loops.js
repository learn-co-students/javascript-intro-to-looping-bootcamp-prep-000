function forLoop(arr) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      arr.push(`I am 1 strange loop.`);
    } else {
      arr.push(`I am ${i} strange loops.`) ;
}
}
return arr;
}

function whileLoop(n) {
  let countdown = n;
  while (countdown > 0) {
    console.log(--countdown);
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
 
do {
  console.log(array.shift());
} while (array.length > 0 && maybeTrue());
return array;
}

