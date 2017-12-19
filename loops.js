function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    array.push("I am ${i} strange loops.")
  }
  
  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(array) {
  if (array.length === 0)
      return array
  do {
    array.pop()
  } while (array.length > 0 && !maybeTrue());

  return array
}