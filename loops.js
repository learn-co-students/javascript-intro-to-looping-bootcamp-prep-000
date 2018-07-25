//For loop
function forLoop(array){
  for (let i = 0; i < 25; i++){
    if (i === 1){
      array.push("I am a strange loop")
    } 
    
    else {
      array.push("I am ${i} strange loops.")  
    }
  }
  return array
}

//best used when you don't know how long a loop will need to run
function whileLoop(n){

while (n > 0) {
  console.log(n--)
  }
  return('done')
}

//Do while Loop
  
function maybeTrue() {
return Math.random() >= 0.5
}

function doWhileLoop(array){
  do {
    array.pop();
  } while (array.length > 0 || maybeTrue())
  
  return array
}