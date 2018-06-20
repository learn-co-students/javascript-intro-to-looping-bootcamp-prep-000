function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    var s = String
    if (i < 1) {
      s = ""
    } else {
      s = "s"
    }
    array.push(`"I am ${i} strange loop${s}."`)
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
 do {
   array.pop()
 } while (array.length > 0 && maybeTrue())
 return array
}