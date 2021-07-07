function forLoop(myArray){
  for (let i = 0; i < 25; i++){
    if (i === 0){
      myArray.push(`"I am a strange loop."`);
    }else{
      myArray.push(`"I am ${i} strange loop${i === 1 ? '' : 's'}."`);
      if (i === 24){
        // console.log(`final array length: ${myArray.length}`);
    return myArray;
      }
    }
  }
}

function whileLoop(myNumber){
  while (myNumber >= 0){
    console.log(--myNumber);
    if (myNumber === 0){
      return 'done';
    }
  }
}

function doWhileLoop(myNewArray){
  do{
    myNewArray.pop();
    return 'fase';
  } while(myNewArray.length > 0 && doWhileLoop());
}