function forLoop(array){
  for (let i = 0; i < 25; i++){
    if (i<2){
    array.push("I am " + i + " strange loop.")
    }
    else {
      array.push("I am " + i + " strange loops.")
    }
  }
  return array
}

function whileLoop(n){
  while (n>0){
    console.log(n)
    n -= 1
  }
  return "done"
}

function doWhileLoop(array){
  var n = 0
  
  function incrementVariable(){
    n += 1
  }
  
  do{
    array.pop()
    incrementVariable()
  } while (array.length > 0 && incrementVariable())
  
  return array
}