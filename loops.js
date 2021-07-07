function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    if (i >= 10) {
      array.push(`I am ${i} strange loops.`)
    } else {
      array.push(`I am ${i} strange loop.`)
    }
  }
  return array
}

function whileLoop(number) {
  while(number > 0) {
    console.log(--number)
  }
  return 'done'
}

function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while ( array.length > 0 )
  return array
}