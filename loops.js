function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop` + (i == 1 ? "": "s") + ".")
  }

  return array
}

function whileLoop(countdown) {
  while (countdown > 0) {
    console.log(--countdown)
  }
  return 'done'
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array.pop()
  } while (maybeTrue() && array.length > 0);

  return array;
}
