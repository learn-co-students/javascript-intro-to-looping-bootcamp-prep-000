function forLoop(arr){
  arr.push("I am 1 strange loop.")
  for(let i = 2; i <= 25; i++){
    arr.push(`I am ${i} strange loops.`)
  }
  return arr
}

function whileLoop(number){
  while (number > 0){
    console.log(--number)  
  }
  return `done`
  
}

function doWhileLoop(arr){
  do {
    arr.pop()  
  } while(maybeTrue() && arr.length>0)
  return arr
  
}

function maybeTrue() {
  return Math.random() >= 0.5
}
