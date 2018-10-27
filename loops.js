function forLoop(array){
  for(var i = 0; i <25; i++){
    if (i === 1){
      array.push(`I am ${i} strange loop.`)
    } else {
      array.push(`I am ${i} strange loops.`)
  }
}
return array
}

let number = 10
function whileLoop(number){
  while(number > 0){
  console.log(number--)
  }
  return ("done")
}

function maybeTrue() {
  return Math.random() >= 0.5; // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(array){
  do{
    array.pop()
  }while(array.length > 0 && maybeTrue())
  return array
}
