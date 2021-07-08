function forLoop (myArray) {
  
  for ( let i = 0; i < 25; i++) {
 
    if (i === 1) {
      myArray.push(`I am ${i} strange loop.`);
    }
    
    else if (i !== 1) {
      myArray.push(`I am ${i} strange loops.`);
    }
    
  }
  return myArray;
}

function whileLoop (num) {
  while (num > 0) {
    console.log (--num)
  }
  return "done";
}

 
//do while loop
function doWhileLoop (differentArray) {
  
  function maybeTrue() {
  return Math.random() >= 0.5
}
  
  do {

  differentArray.pop();
  
  } while (differentArray.length > 0 && maybeTrue())
  
  return differentArray;
}