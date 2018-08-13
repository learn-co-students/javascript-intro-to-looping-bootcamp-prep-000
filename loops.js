function forLoop(myArray) {
  
    for (let i = 0; i < 25; i++) {
    if (i === 1) {
      myArray.push(`I am ${i} strange loop.`);
      
    } else {
      myArray.push(`I am ${i} strange loops.`);
      
    }
  }
  return myArray;
}

function whileLoop(myNumber) {
  while (myNumber > 0) {
      console.log(myNumber);
      --myNumber;
  }
  
  
  return 'done';
   
}

function doWhileLoop(myArray) {
  function incrementVariable() {
  myArray = myArray.pop;
}
  do {
    incrementVariable();
  } while (myArray.length > 0);
  return myArray;
}