function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.")
    } else {
      array.push(`I am ${i} strange loops.`)
    }
    console.log(array)
  }
}

function whileLoop(n) {
  var number = n
  while (number > 0) {
    console.log(number)
    number = number - 1
  }
  return console.log("Done")
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (array.length > 0 && maybeTrue())
  return console.log(array)
}

var a = [1,2,3,4,5,6,7]

doWhileLoop(a)


