function forLoop(anArray) {
//var anArray = []
    for (let i = 0; i < 25; i++) {
      if(i === 1) {
        anArray = [...anArray, `I am ${i} strange loop.`]     
      } else {
        anArray = [...anArray, `I am ${i} strange loops.`]     
      }
  } return anArray
}

function whileLoop(aNumber) {
  while (aNumber > 0) {
    console.log(--aNumber)
  }
  return 'done'
} 

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(anArray) {
//anArray = [1,2,3,4,5,6,7,8,9,0]
  do {
    anArray = anArray.slice(1)
  } while(anArray.length > 0 && maybeTrue())
  return anArray
}


