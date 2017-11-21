function forLoop(arr) {
  arr.push('I am 0 strange loops.')
  arr.push('I am 1 strange loop.')
  for (let i = 2; i <= 24; i++) {
    arr.push(`I am ${i} strange loops.`)
  }
  return arr
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n--)
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(arr) {
  do {
    arr.pop()
  } while (arr.length > 0 && maybeTrue())
  return arr
}