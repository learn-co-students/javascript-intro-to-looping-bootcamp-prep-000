function forLoop(array) {
  for (let i = 0; i<25; i+=1) {
    if (i === 1) {
      array.push(`I am ${i} strange loop.`);
    }
    else {
    array.push(`I am ${i} strange loops.`);
  }}
  return array;
}

array = [];

forLoop(array);
console.log(array);


function whileLoop(n) {
  while(n > 0) {
    console.log(n -=1);
  }
  return 'done';
}

whileLoop(10);

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (array.length > 0 && maybeTrue());
  return array
}

a = ['1','2','3']
doWhileLoop(a)
console.log(a)
