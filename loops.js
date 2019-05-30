

function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop");
    } else {
      array.push(`I am ${i} strange loops`);
    }
  }
  return array;
}


function whileLoop(n) {
  if (n < 0) {
    return "Your number must be more than 0, schmuck."
  }

  while (n > 0) {
    console.log(--n)
  }
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(arr) {

  do {
    arr.shift();
  } while (arr.length > 0 && maybeTrue());
  
  return arr;
}

