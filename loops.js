function forLoop (arrayIn) {
  for (i=0; i<25; i++) {
    arrayIn.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
  }
  return arrayIn;
}

function whileLoop(num) {
  while (num > 0)
    console.log(--num);
  return 'done';
}

var j = 0;

function incrementVariable() {
  j = j + 1;
  return j;
}

function doWhileLoop (num) {
  do {
    console.log("I run once regardless.");
  } while
  (incrementVariable() <= num);
}