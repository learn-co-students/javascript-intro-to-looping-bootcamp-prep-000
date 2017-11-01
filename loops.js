function forLoop(array){
  for (let i=1;i<=25;i++){
    let s = i === 1 ? "I am 1 strange loop." : `I am ${i} strange loops.`
    array.push(s)
  }
  return array
}

function whileLoop(n){
  while(n>0){
    console.log(n)
    n--
  }
  return "done"
}

function doWhileLoop(array){
  while (array.length> 0 && maybeTrue()){
    array.pop()
  }

  return array
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}
