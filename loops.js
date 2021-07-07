function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    array.push("I am ${i} strange loops.")
  }
  return array
}
/*
function whileLoop(n) {
  var m = n
  while (m > 0) {
    console.log(m)
    m = m - 1
  }
  return 'done'
}
*/
function whileLoop(n) {
  while (n > 0) {
    console.log(n--)
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.length = array.length - 1
  }
  while (array.length > 0 && maybeTrue())
  return array
}