function forLoop(trying){
  for (let i = 0; i < 25; i++) {
    if(i === 1) {
      console.log("I am " + i + " strange loop.")
    }
    else {
      console.log(`I am ${i} strange loops.`)
      }   
  }
}

function whileLoop(number) {
  while(number > 0) {
    console.log(--number)
  }
  console.log("done")
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do {
    array.splice(0,array.length)
  } while (array.length > 0 && maybeTrue())
  return array
}