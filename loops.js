function forLoop(loopArray) {
  for (let i = 0; i<25; i++) {
    if (i===1){
      loopArray.push("I am 1 strange loop.")
    } else {
      loopArray.push("I am ${i} strange loops.")
    }
  }
  return loopArray
}

function whileLoop (num) {
  while(num > 0){
    console.log(num)
    num--
  }
  return "done"
}

function doWhileLoop(funArray){
  do {
    funArray.pop()
  }
  while(funArray.length > 0 && maybeTrue())
  
  return funArray
}

function maybeTrue() {
  return Math.random() >= 0.5
}