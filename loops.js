function forLoop(array) {
  n = []
  for(i = 0; i<25; i++){
    if(i===1) { 
      n[i] = "I am 1 strange loop."
    }
    else {
      n[i] = `I am ${i} strange loops.`
    }
  }
  array = [...array, ...n]
  return array
}

function whileLoop(n) {
  while(n>0) {
    console.log(n)
    n = n-1
  }
  return 'done'
}

function doWhileLoop(array) {
  function maybeTrue() {
  return Math.random() >= 0.5
  }
  do {
    array.pop()
  } while (array.length > 0 && maybeTrue())
  return array
}