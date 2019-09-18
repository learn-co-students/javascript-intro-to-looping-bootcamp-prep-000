function forLoop (myArray){
  
  for (var i = 0; i < 25; i++){
    if (i==1){
      myArray.push('I am ${i} strange loop')
    }
    else {
      myArray.push('I am ${i} strange loops')
    }
}
return myArray
  
}
function whileLoop(myNumber){
  while (myNumber>0){
    console.log(--myNumber)
    
  }
  return 'done'
}

function doWhileLoop(myArray){
  do{
    myArray.pop()
  } while(maybeTrue() && myArray.length>0)
  return myArray
}

function maybeTrue() {
  return Math.random() >= 0.5
}