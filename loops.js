function forLoop(array){
  
  for(var i = 0; i < 25; i++){
    
    string = `I am ${i} strange loop`
    
    if (i === 1){
      string = string + "."
    } else {
      string = string + "s."
    }
    
    array.push(string)
    
    
    
  }
  return array
}

function whileLoop(n){
  
  while (n >  0){
    console.log(n)
    n--
  }
  
  return "done"
  
}

function maybeTrue() {
    return Math.random() >= 0.5
  
}

function doWhileLoop(array){
  
  do {
    array.length -= 1
  } while (array.length > 0 && maybeTrue());
  
  return array
}
