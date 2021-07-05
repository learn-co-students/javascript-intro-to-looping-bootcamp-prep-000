function forLoop (array) {
for (let i = 0; i < 25; i++) {
  if (i === 1)
  {
    console.log(`I am ${i} strange loop.`)
  } else {
    console.log(`I am ${i} strange loops.`)
  }
  }
}

function whileLoop (number) {
  while (number > 0) {
    console.log(--number)
  }
  return 'done'
}

var i = 0;

function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(number) {
  do {
    console.log('I run once regardless.')
  } while (incrementVariable() < number)
}
