function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    var s = (i === 1)? '' : 's'
    array.push("I am " + i + " strange loop" + s + ".")
  }
  return array
}

function whileLoop(n) {
  while(n--) {
    console.log(n + 1)
  }
  return 'done'
}

var i = 0
function incrementVariable() {
  i = i + 1
}
function doWhileLoop(array) {
  do {
    delete array.pop()
  } while(array.length > 0 && incrementVariable())
  return array
}