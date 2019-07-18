function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    let s = i == 1 ? '': 's' 
    array.push('I am ' + i + ' strange loop' + s + '.')
  }
  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n)
    n--
  }
  return "done"
}

function doWhileLoop(n) {
  let x = 0
  do {
    x++
    console.log('I run once regardless.')
  }
  while (x < n)
}
