
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am ${i} strange loop")
    } else {
      array.push("I am ${i} strange loops")
    }
  }
  return array
}
var ary = [ ]
forLoop(ary)

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return "done"
}

function doWhileLoop(array) {
  do {
    array.length = array.length - 1
  } while (array.length > 0 && maybeTrue());
  return array
}
