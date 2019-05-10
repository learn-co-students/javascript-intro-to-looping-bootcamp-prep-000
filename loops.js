function forLoop(arr) {
  var s = '';
  for (let i = 1; i < 26; i++) {
    if (i > 1) {s = 's'}
    var str = `I am ${i} strange loop${s}.`;
    arr.push(str);
  }
  return arr;
}

function whileLoop(num) {
  let i = num;
  while (i > 0){ console.log(--i)}
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5 
  // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(arr) {
  do {
    arr.pop();
  }
  while (arr.length > 0 && maybeTrue());
  return arr;
}