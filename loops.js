function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.");
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
return array;
}

// counts down from n to 0

function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
return 'done';
}

// removes elements from `array` until `array` is empty or until `maybeTrue()` returns `false

function doWhileLoop(array) {
  function maybeTrue() {
    return array.length > 0 && maybeTrue();
}

do {
  console.log(array.length = 0);
} while (maybeTrue());
return array;  
}