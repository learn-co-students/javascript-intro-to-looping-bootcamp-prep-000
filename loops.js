function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if(i === 1) {
      array.push(`I am ${i} strange loop.`)
    }
    else {
      array.push(`I am ${i} strange loops.`)
    }
  } return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  if(n === 0) {
  return `done`
}
}

function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(array) {
    do {
        array.splice(array.length - 1);
    } while (array.length > 0);
    return array
}




