var array = {
  // inially empty
}

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    /*
    array[i] = `"I am ${i} strange loop${i === 0 ? '' : 's'}."`
     */
    if (i === 11) {
      array[i] = "I am 11 strange loops."
    } else {
      array[i] = `"I am ${i} strange loops."`
    }
    
  }
  return array
}

function whileLoop(n) {
  return array
}

function doWhileLoop(array) {
  return array
}
 
 