function forLoop(array) {
  for (var i = 0; i < 25; i++) {
  if (i == 0) {
    array.push("I am 1 strange loop.")
  } else {
    array.push(`I am ${i} strange loops.`)
  }
  }
  return array
}

function whileLoop(number) {
  while (number > 0) {
    console.log(parseInt(number--, 10))
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.shift()
  } while (array.length > 0 && maybeTrue())
  return array
}