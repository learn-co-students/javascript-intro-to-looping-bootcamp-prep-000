function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push(`I am 1 strange string.`)
    } else {
      array.push(`I am ${i} strange strings.`)
    }
  }
  return array
}

function whileLoop(i) {
  while (i > 0) {
    console.log(--i)
  }
  return `done`
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5;
  }
  do {
  array.pop()
} while (array.length > 0 && maybeTrue());
return array
}
