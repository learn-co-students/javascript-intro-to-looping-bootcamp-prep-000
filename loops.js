function forLoop(array) {
  for(var i = 0; i < 25; i++) {
    if(i+1 !== 1) {
      tempString = `I am ${i+1} strange loops.`
    } else {
      tempString = `I am ${i+1} strange loop.`
    }
    array.push(tempString)
  }
  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (maybeTrue() && array.length > 0)
  return array
}
