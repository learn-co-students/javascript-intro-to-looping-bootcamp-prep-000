function forLoop(testArray) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      //testArray[i] = "I am 1 strange loop"
      testArray.push("I am 1 strange loop")
    } else {
      testArray.push(`I am ${i} strange loops.`)
      //testArray[i] = `I am ${i} strange loops.'`
    } 
  }
  return testArray
}

function whileLoop(num) {
  while (num >0) {
    --num
    console.log(num)
  }
  return 'done'
}


function maybeTrue() {
    return Math.random() >= 0.5
  }
  
function doWhileLoop(testArray) {
  do {
    maybeTrue()
    testArray.pop()
  } while (testArray.length > 0 && maybeTrue());
  return testArray
}