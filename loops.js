function forLoop(array) {
    for (let i = 0; i < 25; i++) {
        if (i <= 1) {
          array[i] = 'I am 1 strange loop.';
        } else if (i > 1) {
          array[i] = `I am ${i} strange loops.`;
        }
      }
    return array;
}

function whileLoop(number) {
  while (number > 0) {
    console.log(number);
    number--;
  }
  return "done";
}

function doWhileLoop(array) {
  
  function maybeTrue() {
    return Math.random() >= 0.5;
  }
  do {
    array = array.slice(0, array.length - 1);  
  } while (array.length > 0 || maybeTrue() === false);
  return array;
}

