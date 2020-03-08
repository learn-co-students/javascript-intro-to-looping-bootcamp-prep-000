function forLoop(arr) {
  for (let i = 0; i < 25; i++) {
    arr.push(`I am ${i} strange loop${i === 0 || i === 1 ? '' : 's'}.`);
  }
  return arr;
}

function whileLoop(n) {
  while (n > 0) {
   console.log(--n);
 }
 return "done";
}

function doWhileLoop(int) {
  let i = 0;
  function incrementVariable() {
    i = i + 1;
    return i;
  }
  do {
    console.log("I run once regardless.");
  } while(incrementVariable() < int);
}