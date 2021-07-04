array = []

function forLoop(array) {
  const t = 25
  for ( let i = 0; i < t; i++) {
    array.push("I am " + i + " strange loop")
  }
  return array
}

function whileLoop(number) {
  while (number > 0) {
    console.log(--number)
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}


function doWhileLoop(array) {
  do {
    return array.slice(0, array.length - 1)
  } while (array.length > 0 && maybeTrue())
}
  