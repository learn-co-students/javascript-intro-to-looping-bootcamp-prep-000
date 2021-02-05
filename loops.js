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

function doWhileLoop(num) {
  num += 1
  return num
  do {
    console.log("I sun once regardless")
  } while (doWhileLoop() < 5)
}

// do {
//  console.log("I sun once regardless")
// } while (doWhileLoop() < 5)