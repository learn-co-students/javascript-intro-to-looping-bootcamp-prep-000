function forLoop(array) {
  for (i = 0; i < 25; i++) {
    if(i === 1) {
    array.push('I am 1 strange loop.');
  } else {
    array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}

function whileLoop(number) {
  while (number > 0) {
      console.log(--number);
    if (number === 0) {
      return 'done';
    } 
  }
  console.log(whileLoop());
}

var f = 0;

function incrementVariable() {
      f = f + 1;
      return f;
}

function doWhileLoop(num) {
  do {
    console.log("I run once regardless.");
  } while (incrementVariable() <= num);
}