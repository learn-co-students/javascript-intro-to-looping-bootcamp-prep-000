


function forLoop(array) {
    for (let i = 0; i < 24; i++) {
      array.push(`I am ${i+1} strange loop${i === 0 ? "" : "s"}.`)
    }

    return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n)
    n--
  }
  return 'done'
}

function doWhileLoop(num) {
  do {
    console.log("I run once regardless.")
    num--
  } while (num > 0)
}
