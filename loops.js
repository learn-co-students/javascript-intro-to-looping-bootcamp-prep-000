function forLoop(arrayLoop) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      arrayLoop.push("I am 1 strange loop.") 
      } else { arrayLoop.push(`I am ${i} strange loops.`)
    }
  }
  return arrayLoop
}


function whileLoop(num) {
  // num = 10
  while (num > 0) {
    num -= 1
    console.log(num)
  }
  return "done"
}

// var doint = 0
function doWhileLoop(num) {
    var doint = 0
    function incrementVarible() {
      doint = doint + 1
      return doint
    }
    do {
      console.log("I run once regardless.")
    } while (incrementVarible() < num)
}