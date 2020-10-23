function forLoop(myArray) {
  for (var i = 1; i <= 25; i++) {
    myArray.push('hello')
  }
  return myArray
}

function whileLoop(n) {
  while ( n > 0 ) {
    console.log(n--)
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(myArray) {
  do {
    myArray.pop()
  } while ( myArray.length > 0 && maybeTrue() )
  return myArray
}
