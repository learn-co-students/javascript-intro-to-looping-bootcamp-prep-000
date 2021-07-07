var forLoop = foop;

function foop(array) {
  for (let i = 0; i < 25; i++) {
  array.push(`"I am ${i} strange loops"`);
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
  return 'done';
}

function doWhileLoop(array) {
    function maybeTrue() {
     return Math.random() >= 0.5;
    }
     do {
       array.shift();
       return array;
     } while (maybeTrue());
}