var loop = []

var forLoop = function(array){
  for (let i = 0; i < 25; i++){
    if (i === 1){
      array.push(`I am 1 strange loop.`)
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}


var whileLoop = function(num){
  while (num > 0) {
    console.log(num--)
  }
  return "done"
}

var doWhileLoop = function(int){
  let i = 0
  function incrementVariable() {
    i = i + 1;
    return i;
  }
  
  do {
    console.log("I run once regardless.")
  } while (incrementVariable() < int )
}


forLoop(loop)
whileLoop(10)
console.log(doWhileLoop(2))

