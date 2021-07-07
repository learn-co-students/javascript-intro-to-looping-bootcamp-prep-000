function forLoop(array) {
  for (i = 0; i < 25; i += 1) {
    /*
    if (i = 1) {
      array.push("I am " + i + " strange loop.")
    } else {
      array.push("I am " + i + " strange loops.")
    }
    */
    array.push("test")
  }
  return array
}

function whileLoop(number) {
  while (number > 0) {
    number -= 1
    console.log(number)
  }
  return "done"
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (array.length > 0 && Math.random() >= 0.5)
  return array
}
