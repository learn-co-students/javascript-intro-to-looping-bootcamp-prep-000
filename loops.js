function forLoop(array) {
  for (let i = 0; i < 25; i++) {
     if (i === 1)
      array.push("I am 1 strange loop.")
     else
      array.push("I am " + i + " strange loops.")
  }
  return array
}

function whileLoop(n) {
  while (n > 0) {
    n--
    console.log(n)
  }
  return "done"
}

function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(array) {
  do {
    i = 0  
    array.pop()
  } while (array.length > 0 && incrementVariable())
  return array
}