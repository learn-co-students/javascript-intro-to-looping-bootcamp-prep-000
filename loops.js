function forLoop(array){
  var newArray = [...array]
  for (var i = 0; i < 25; i++){
      if(i != 1){
        
        newArray.push(`I am ${i} strange loops.`)
       
      }
     
     else{
       
       newArray.push("I am 1 strange loop.")
     }
  }
  return newArray
}

function whileLoop(Number){
  countdown = Number
  while (countdown > 0){
    -- countdown
    console.log(countdown)
    
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  newArray = array
  do { newArray.shift();
  return newArray
  }
  while(newArray.legth() === 0 && maybeTrue())
}