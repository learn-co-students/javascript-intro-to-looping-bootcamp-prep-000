function forLoop(array) {
  array = [...array];
  for (let i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
  }
  return array
}

function whileLoop(num) {
  while (num > 0) {
    console.log(--num)
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(ary) {
  do {
    ary.pop();
  } while (ary.length > 0 && maybeTrue())
  return ary;
}