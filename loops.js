function forLoop(array) {
  for(var i = 0; i < 25; i++) {
    if(i === 1) {
      array.unshift("I am 1 strange loop")
    } else {
      array.unshift(`I am ${i} strange loop`)
    }
  }
  return array
}

function whileLoop(n) {
  while(n > 0) {
    console.log(n--)
  } if (n === 0) {
    return 'done'
  }
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while(array.length > 0 && maybeTrue()) {
    return array
  }
}
