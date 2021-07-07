function forLoop(myArray) {
  for (let i = 0; i < 25; i++)
    if (i === 1) {
      myArray.push('I am 1 strange loop.')
    } else {
      myArray.push(`I am ${i} strange loops.`)
    }
    return myArray
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return 'done'
}

function doWhileLoop(num) {
    var i = 0;

    function incrementVariable() {
    i = i + 1;
    return i;
    }

    do {console.log('I run once regardless');
    }
    while (incrementVariable() < num);
    }
