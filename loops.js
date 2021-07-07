function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange string.")
        } else {
      array.push(`I am ${i} strange string.`)
    }
  }
  return array
}

function whileLoop(number) {
  while (number > 0) {
    console.log(--number)
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (array.length > 0 && maybeTrue())
  return array
}
