function forLoop(myArray){
  for(var i =0;i<25;i++){
    if(i===1){
      myArray.push(`I am 1 strange loop.`)
    }else{
      myArray.push(`I am ${i} strange loops.`)
    }
  }
  return myArray
}

function whileLoop(number){
  
  while(number>0){
    console.log(--number)
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}


function doWhileLoop(myArray){
  
  do{
    myArray.pop()
  }while(myArray.length>0 && maybeTrue())
  
  return myArray
  
}