function forLoop(array) {
  let item = array;
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      item.push("I am 1 strange loop.");
    } else {
      item.push(`I am ${i} strange loops.`);
    }
  }
  return item;
}

function whileLoop(num){
  while (num > 0) {
    console.log(num);
    num--;
  }
  return 'done';
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
  }

  do {
    if(array.length > 0 && maybeTrue()) {
      array.pop();
    }
  } while (maybeTrue());
  return array;
}
