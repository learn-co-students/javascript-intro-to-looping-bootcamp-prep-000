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
  num = 1
  while (num < 6) {
    num += 1
  }
}