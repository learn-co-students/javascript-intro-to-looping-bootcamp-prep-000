var arr = [];

function forLoop(arr) {
  for (let i = 0; i < 25; i++) {
    arr = [...arr, `I am ${i} strange loop${i === 1 ? '' : 's'}.`]
  }
  return arr;
}
forLoop(arr);

function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
  return 'done';
}

whileLoop();

let num = 0;

function incrementVariable() {
  num = num + 1;
  return num;
}

function doWhileLoop(num) {
  do { console.log("I run once regardless.")
} while (incrementVariable() <= num);
}