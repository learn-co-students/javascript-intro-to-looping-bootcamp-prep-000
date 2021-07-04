function forLoop(array) {
  for (let i = 0; i<25; i++) {
    if (i === 1) {
      var string = "I am 1 strange loop."
      array.push(string)
    }
    else {
      var strings= "I am ${i} strange loops."
      array.push(strings)
    }
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
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
 do {array.length = array.length - 1
 }
  while (array.length > 0 && maybeTrue());
  return array
}