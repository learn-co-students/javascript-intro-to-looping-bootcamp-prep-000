function forLoop(arrayLoop) {
  for (let i = 0; i < 25; i++) {
    if (i == 1) {
      arrayLoop.push("I am 1 strange loop.") 
      } else { arrayLoop.push(`I am ${i} strange loops.`)
    }
  }
  return arrayLoop
}


function whileLoop(num) {
  num = 10
  
  return "done"
}

var num = 1
while (whileLoop(> 0)) {
    num -= 1
    console.log(num)
  }